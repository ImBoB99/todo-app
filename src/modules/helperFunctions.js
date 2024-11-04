import { TodoGroup } from "./TodoGroup";

function checkDuplicateTodoGroup(todoGroupName) {
  for (const instance of TodoGroup.instances) {
    if (instance.name.toLowerCase() === todoGroupName.toLowerCase()) {
      return true;
    }
  }
}

function validateTodoForm(todoTitle, todoDueDate) {
  if (todoTitle.trim().length !== 0 && todoDueDate !== "") {
    return true;
  }
}

export { checkDuplicateTodoGroup, validateTodoForm };
