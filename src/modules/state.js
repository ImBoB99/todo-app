import { displayTodos } from "..";

let currentTodoGroup = null;

function setCurrentTodoGroup(todoGroup) {
    currentTodoGroup = todoGroup;
    switchDisplayedTodoGroup (currentTodoGroup);
}

function switchDisplayedTodoGroup (currentTodoGroup) {
    displayTodos(currentTodoGroup);
}

export {currentTodoGroup, setCurrentTodoGroup}