import { displayTodo } from "./displayTodo";
import { state } from "./state";

function displayTodos(currentTodoGroup) {

    const content = document.querySelector(".content");

    content.innerHTML = "";

    const todoGroupName = document.createElement("h1");

    todoGroupName.textContent = state.currentTodoGroup.name;

    content.append(todoGroupName);
    
    state.currentTodoGroup.todos.forEach((todo) => {
        displayTodo(todo.title, todo.dueDate, todo.priority)
    })
}

export {displayTodos}