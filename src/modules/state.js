import { displayTodos } from "..";

// load a currentTodoGroup variable into the scope and function for its switching
// when its switched, re-render content to display the new Todos

let currentTodoGroup = null;

function setCurrentTodoGroup(todoGroup) {
    currentTodoGroup = todoGroup;
    displayTodos(currentTodoGroup)
}

export {currentTodoGroup, setCurrentTodoGroup}