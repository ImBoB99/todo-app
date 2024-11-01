import "./styles.css";
import { TodoGroup } from "./modules/TodoGroup";
import {displayTodoGroup} from "./modules/displayTodoGroup";
import { state } from "./modules/state";
import { displayTodo } from "./modules/displayTodo";
import { initializeTodoForm } from "./modules/initializeTodoForm";
import { initializeTodoGroupForm } from "./modules/initializeTodoGroupForm";

new TodoGroup("Default Project")

displayTodoGroup("Default Project");

console.log(state.currentTodoGroup);

initializeTodoForm(state.currentTodoGroup);

initializeTodoGroupForm();

// Displaying the content

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