import { displayTodo } from "./displayTodo";
import { setCurrentTodoGroup } from "./state";
class TodoGroup {

    static instances = []

    constructor(name) {
        this.name = name;
        this.todos = [];
        TodoGroup.instances.push(this);
        setCurrentTodoGroup(this)
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
}

export {TodoGroup}