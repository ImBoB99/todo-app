import { displayTodos } from "./displayTodos";

// load a currentTodoGroup variable into the scope and function for its switching
// when its switched, re-render content to display the new Todos

const state = {
    currentTodoGroup: null,
};

function setCurrentTodoGroup(todoGroup) {
    state.currentTodoGroup = todoGroup;
    displayTodos(state.currentTodoGroup);
}

// Make the state object globally accessible for testing
window.state = state;

export {state, setCurrentTodoGroup}