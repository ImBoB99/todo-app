import "./styles.css";
import { TodoGroup } from "./modules/TodoGroup";
import {displayTodoGroup} from "./modules/displayTodoGroup";
import { state } from "./modules/state";
import { initializeTodoForm } from "./modules/initializeTodoForm";
import { initializeTodoGroupForm } from "./modules/initializeTodoGroupForm";

import { Todo } from "./modules/Todo";
import { displayTodos } from "./modules/displayTodos";
import { setCurrentTodoGroup } from "./modules/state";

// Set today's date as default for date picker

document.getElementById('form-tododuedate').valueAsDate = new Date();

// Initialize a default todo group and add event listeners to buttons

displayTodoGroup("Default Project");

initializeTodoForm(state.currentTodoGroup);

initializeTodoGroupForm();

// First Project: Default Project
const defaultProject = new TodoGroup("Default Project");

const defaultTodos = [
    new Todo("Walk the dog", "Sunday, November 3 2024", "Medium"),
    new Todo("Grocery shopping", "Monday, November 4 2024", "High"),
    new Todo("Prepare weekly meal plan", "Monday, November 4 2024", "Medium"),
    new Todo("Organize garage", "Saturday, November 9 2024", "Low"),
    new Todo("Respond to emails", "Tuesday, November 5 2024", "High"),
    new Todo("Schedule doctor appointment", "Wednesday, November 6 2024", "Medium"),
    new Todo("Pick up dry cleaning", "Thursday, November 7 2024", "Low"),
    new Todo("Pay bills", "Friday, November 8 2024", "High"),
    new Todo("Car maintenance check", "Saturday, November 9 2024", "Medium"),
    new Todo("Donate unused clothes", "Saturday, November 9 2024", "Low")
];

// Add each todo to the Default Project
defaultTodos.forEach(todo => defaultProject.addTodo(todo));
displayTodos(defaultProject);


// Second Project: Second Project
const secondProject = new TodoGroup("Second Project");

const secondProjectTodos = [
    new Todo("Walk the cat", "Sunday, November 3 2024", "Medium"),
    new Todo("Set up home office", "Monday, November 4 2024", "High"),
    new Todo("Read a new book", "Wednesday, November 6 2024", "Low"),
    new Todo("Create monthly budget", "Thursday, November 7 2024", "High"),
    new Todo("Research for new blog post", "Friday, November 8 2024", "Medium"),
    new Todo("Organize bookshelf", "Saturday, November 9 2024", "Low"),
    new Todo("Backup laptop data", "Sunday, November 10 2024", "Medium"),
    new Todo("Plan a weekend hike", "Saturday, November 9 2024", "Medium"),
    new Todo("Complete online course module", "Friday, November 8 2024", "High"),
    new Todo("Clean up old documents", "Saturday, November 9 2024", "Low")
];

// Add each todo to the Second Project
secondProjectTodos.forEach(todo => secondProject.addTodo(todo));
displayTodos(secondProject);

displayTodoGroup("Second Project");


