import "./styles.css";
import { Todo } from "./modules/Todo";
import { TodoGroup } from "./modules/TodoGroup";

const todo1 = new Todo ("Walk Dog", "2014-02-8", "High")
const todo2 = new Todo ("Brush Dog", "2024-04-6", "Medium")
const todo3 = new Todo ("Wash Dog", "2033-22-12", "Low")
const project = new TodoGroup ("Hope")

project.addTodo(todo1)
project.addTodo(todo2)
project.addTodo(todo3)

project.displayTodos()

const showTodoForm = document.querySelector("#add-todo");
const todoForm = document.querySelector("#todoForm")
const todoFormConfirm = document.querySelector("#todoForm-confirm")

showTodoForm.addEventListener("click", () => {
    todoForm.showModal();
});

todoFormConfirm.addEventListener("click", (event) => {
    event.preventDefault();

    const todoTitle = document.getElementById("form-todotitle").value;
    const todoDueDate = document.getElementById("form-tododuedate").value;
    const todoPriority = document.getElementById("form-todopriority").value;

    console.log("Title:", todoTitle);
    console.log("Due Date:", todoDueDate);
    console.log("Priority:", todoPriority);

    todoForm.close();
})