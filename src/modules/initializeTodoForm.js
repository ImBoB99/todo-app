import { Todo } from "./Todo";
import { displayTodos } from "./displayTodos";
import { state } from "./state";

function initializeTodoForm(currentTodoGroup) {

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
        state.currentTodoGroup.addTodo(newTodo);
        displayTodos(state.currentTodoGroup)

        console.log(state.currentTodoGroup)

        todoForm.close();
    })

}

export {initializeTodoForm}