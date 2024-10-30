import "./styles.css";
import { Todo } from "./modules/Todo";
import { TodoGroup } from "./modules/TodoGroup";
import {submitTodoGroup} from "./modules/submitTodoGroup";
import { currentTodoGroup, setCurrentTodoGroup } from "./modules/state";

submitTodoGroup("Default Project")
submitTodoGroup("Second Project")

setCurrentTodoGroup(TodoGroup.instances[0])

console.log(currentTodoGroup)

// TODO FORM

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

    const newTodo = new Todo(todoTitle, todoDueDate, todoPriority);

    // Add the new todo to the current todo group
    currentTodoGroup.addTodo(newTodo);

    console.log(currentTodoGroup)

    todoForm.close();
})

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

    submitTodoGroup(todoGroupName)
})