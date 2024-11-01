import "./styles.css";
import { TodoGroup } from "./modules/TodoGroup";
import {displayTodoGroup} from "./modules/displayTodoGroup";
import { currentTodoGroup } from "./modules/state";
import { displayTodo } from "./modules/displayTodo";
import { initializeTodoForm } from "./modules/initializeTodoForm";

new TodoGroup("Default Project")

displayTodoGroup("Default Project");

console.log(currentTodoGroup)

initializeTodoForm(currentTodoGroup)

// TODO GROUP FORM

const addTodoGroupBtn = document.querySelector("#addTodoGroup");
const todoGroupForm = document.querySelector("#todoGroupForm")
const todoGroupFormCancel = document.querySelector("#todoGroupForm-cancel")
const todoGroupFormConfirm = document.querySelector("#todoGroupForm-confirm")

addTodoGroupBtn.addEventListener("click", () => {
    todoGroupForm.style.display = "inline-flex";
})

todoGroupFormCancel.addEventListener("click", (event) => {
    event.preventDefault();
    todoGroupForm.style.display = "none";
})

todoGroupFormConfirm.addEventListener("click", (event) => {
    event.preventDefault();

    const todoGroupName = document.querySelector("#form-todoGroupName").value;

    new TodoGroup(todoGroupName);

    displayTodoGroup(todoGroupName);
})

// Displaying the content

function displayTodos(currentTodoGroup) {

    const content = document.querySelector(".content");

    content.innerHTML = "";

    const todoGroupName = document.createElement("h1");

    todoGroupName.textContent = currentTodoGroup.name;

    content.append(todoGroupName);
    
    currentTodoGroup.todos.forEach((todo) => {
        displayTodo(todo.title, todo.dueDate, todo.priority)
    })
}

export {displayTodos}