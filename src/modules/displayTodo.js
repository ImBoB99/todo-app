import { state } from "./state";
import { displayTodos } from "./displayTodos";

// function to render a single TODO element to the DOM

function displayTodo(title, date, priority, index, finished) {
  const content = document.querySelector(".content");

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.setAttribute("index", `${index}`);
  todoDiv.setAttribute("finished", `${finished}`);

  const todoCheckbox = document.createElement("div");
  todoCheckbox.classList.add("todo-checkbox");

  const todoDescription = document.createElement("div");
  todoDescription.classList.add("todo-description");

  const todoTitle = document.createElement("p");
  todoTitle.classList.add("todo-title");
  todoTitle.textContent = title;

  const todoDate = document.createElement("div");
  todoDate.classList.add("todo-date");

  // Add SVG clock icon to todoDate
  const clockIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  clockIcon.setAttribute("class", "clock-icon");
  clockIcon.setAttribute("viewBox", "0 0 24 24");
  clockIcon.setAttribute("fill", "none");
  clockIcon.innerHTML = `
        <g stroke-width="0"></g>
        <g stroke-linecap="round" stroke-linejoin="round"></g>
        <g>
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 6V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M16.24 16.24L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    `;
  todoDate.appendChild(clockIcon);

  const dueDate = document.createElement("div");
  dueDate.setAttribute("id", "due-date");
  dueDate.textContent = date;
  todoDate.appendChild(dueDate);

  const todoPriority = document.createElement("p");
  todoPriority.classList.add("todo-priority");
  todoPriority.textContent = `${priority} Priority`;

  const deleteIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  deleteIcon.setAttribute("class", "delete-icon");
  deleteIcon.setAttribute("viewBox", "0 0 24 24");
  deleteIcon.setAttribute("fill", "none");

  deleteIcon.innerHTML = `    <g stroke-width="0"></g>
    <g stroke-linecap="round" stroke-linejoin="round"></g>
    <g>
        <path
            d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
            stroke="currentColor" stroke-width="2"></path>
        <path d="M19.5 5H4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="currentColor"
            stroke-width="2"></path>
        <path d="M14 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        <path d="M10 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </g>
    `;
  todoDiv.appendChild(deleteIcon);

  todoDescription.append(todoTitle, todoDate, todoPriority);

  todoDiv.append(todoCheckbox, todoDescription);

  content.append(todoDiv);

  // Event listener for todo completion toggling

  todoCheckbox.addEventListener("click", (event) => {
    const index = event.target.parentElement.getAttribute("index");
    state.currentTodoGroup.todos[index].toggleFinished();
    todoDiv.setAttribute(
      "finished",
      `${state.currentTodoGroup.todos[index].finished}`,
    );
  });

  // Event listener for todo deletion

  deleteIcon.addEventListener("click", (event) => {
    const index = event.target.parentElement.getAttribute("index");

    if (index !== -1) {
      state.currentTodoGroup.todos.splice(index, 1);
    }

    displayTodos(state.currentTodoGroup);
  });
}

export { displayTodo };
