import { TodoGroup } from "./TodoGroup";
import { displayTodoGroup } from "./displayTodoGroup";

function initializeTodoGroupForm() {
    const addTodoGroupBtn = document.querySelector("#addTodoGroup");
    const todoGroupForm = document.querySelector("#todoGroupForm");
    const todoGroupFormCancel = document.querySelector("#todoGroupForm-cancel");
    const todoGroupFormConfirm = document.querySelector("#todoGroupForm-confirm");
    
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
}

export {initializeTodoGroupForm}