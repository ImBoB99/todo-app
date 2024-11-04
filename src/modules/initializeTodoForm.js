import { Todo } from "./Todo";
import { displayTodos } from "./displayTodos";
import { state } from "./state";
import { validateTodoForm } from "./helperFunctions";
import { populateLocalStorage } from "./populateLocalStorage";
import { parse, format } from "date-fns";

function initializeTodoForm() {
  const showTodoForm = document.querySelector("#add-todo");
  const todoForm = document.querySelector("#todoForm");
  const todoFormConfirm = document.querySelector("#todoForm-confirm");

  showTodoForm.addEventListener("click", () => {
    todoForm.showModal();
  });

  todoFormConfirm.addEventListener("click", (event) => {
    event.preventDefault();

    const todoTitle = document.getElementById("form-todotitle").value;
    const todoDueDate = document.getElementById("form-tododuedate").value;
    const todoPriority = document.getElementById("form-todopriority").value;

    const displayError = document.querySelector(".error-title");

    if (validateTodoForm(todoTitle, todoDueDate)) {
      // use date-fns to parse and format the date
      const parsedDueDate = parse(todoDueDate, "yyyy-MM-dd", new Date());
      const formattedDueDate = format(parsedDueDate, "EEEE, MMMM d yyyy");

      const newTodo = new Todo(todoTitle, formattedDueDate, todoPriority);

      // Add the new todo to the current todo group
      state.currentTodoGroup.addTodo(newTodo);
      displayTodos(state.currentTodoGroup);
      displayError.style.display = "none";

      // Update local storage
      populateLocalStorage();
      console.log("Local storage updated");

      todoForm.close();
    } else {
      displayError.innerHTML = "Todo Title is required";
      displayError.style.display = "flex";
    }
  });
}

export { initializeTodoForm };
