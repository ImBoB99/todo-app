import { TodoGroup } from "./TodoGroup";
import { displayTodoGroup } from "./displayTodoGroup";
import {checkDuplicateTodoGroup} from "./helperFunctions"

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

        const displayError = document.querySelector(".error-todoGroupName");

        if (todoGroupName.length !== 0 && checkDuplicateTodoGroup(todoGroupName) !== true) {
            new TodoGroup(todoGroupName);
    
            displayTodoGroup(todoGroupName);

            displayError.style.display = "none";
        } else {
            displayError.innerHTML = "Todo Title is required";
            displayError.style.display = "flex";
        }
    })
}

export {initializeTodoGroupForm}