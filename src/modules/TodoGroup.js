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

  static findOrCreate(name) {
    // Look for an existing group with the same name
    let group = TodoGroup.instances.find((instance) => instance.name === name);

    // If no group exists, create a new one
    if (!group) {
      group = new TodoGroup(name);
    }

    return group;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

window.instances = TodoGroup.instances;

export { TodoGroup };
