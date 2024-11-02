import { setCurrentTodoGroup } from "./state";

// class for Todo Groups with constructor and few useful methods

class TodoGroup {

    static instances = []; // keeps track of all created todo groups

    constructor(name) {
        this.name = name;
        this.todos = [];
        TodoGroup.instances.push(this);
        setCurrentTodoGroup(this); // switch the currently displayed todo group on new Todo Group
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

window.instances = TodoGroup.instances;

export {TodoGroup}