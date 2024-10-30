import { displayTodo } from "./displayTodo";

class TodoGroup {

    constructor(name = "default") {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        console.log(`${todo} added successfully`);
    }

    removeTodo(todo) {
        const index = this.todos.indexOf(todo);

        if (index !== -1) {
            this.todos.splice(index, 1)
            console.log(`${todo.title} removed successfully`);
        } else {
            console.log(`${todo.title} does not exist`);
        }
    }

    displayTodos() {

        const content = document.querySelector(".content");

        const todoGroupName = document.createElement("h1");

        todoGroupName.textContent = this.name;

        content.append(todoGroupName);
        
        this.todos.forEach((todo) => {
            displayTodo(todo.title, todo.dueDate, todo.priority)
        })
    }
}

export {TodoGroup}