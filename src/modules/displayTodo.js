// function to render a single TODO element to the DOM

function displayTodo(title, date, priority) {
    const content = document.querySelector(".content");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

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
    const clockIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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

    todoDescription.append(todoTitle, todoDate, todoPriority);

    todoDiv.append(todoCheckbox, todoDescription);

    content.append(todoDiv);

}

export {displayTodo}