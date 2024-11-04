import { TodoGroup } from "./TodoGroup";
import { displayTodoGroup } from "./displayTodoGroup";
import { checkDuplicateTodoGroup } from "./helperFunctions";

import { populateLocalStorage } from "./populateLocalStorage";

function initializeTodoGroupForm() {
  const addTodoGroupBtn = document.querySelector("#addTodoGroup");
  const todoGroupForm = document.querySelector("#todoGroupForm");
  const todoGroupFormCancel = document.querySelector("#todoGroupForm-cancel");
  const todoGroupFormConfirm = document.querySelector("#todoGroupForm-confirm");

  addTodoGroupBtn.addEventListener("click", () => {
    todoGroupForm.style.display = "inline-flex";
    addTodoGroupBtn.style.display = "none";
  });

  todoGroupFormCancel.addEventListener("click", (event) => {
    event.preventDefault();
    todoGroupForm.style.display = "none";
    addTodoGroupBtn.style.display = "flex";
  });

  todoGroupFormConfirm.addEventListener("click", (event) => {
    event.preventDefault();

    const todoGroupName = document.querySelector("#form-todoGroupName").value;

    const displayError = document.querySelector(".error-todoGroupName");

    if (
      todoGroupName.length !== 0 &&
      checkDuplicateTodoGroup(todoGroupName) !== true
    ) {
      new TodoGroup(todoGroupName);

      displayTodoGroup(todoGroupName);

      displayError.style.display = "none";
      todoGroupForm.style.display = "none";
      addTodoGroupBtn.style.display = "flex";

      // Update local storage
      populateLocalStorage();
      console.log("Local storage updated");
    } else {
      displayError.innerHTML = "Can't be empty/duplicate";
      displayError.style.display = "flex";
      addTodoGroupBtn.style.display = "none";
    }
  });
}

export { initializeTodoGroupForm };
