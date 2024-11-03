import "./styles.css";
import { TodoGroup } from "./modules/TodoGroup";
import { displayTodoGroup } from "./modules/displayTodoGroup";
import { state } from "./modules/state";
import { initializeTodoForm } from "./modules/initializeTodoForm";
import { initializeTodoGroupForm } from "./modules/initializeTodoGroupForm";
import { displayTodayTodos } from "./modules/displayTodayTodos";
import { displayThisWeekTodos } from "./modules/displayWeekTodos";

import { Todo } from "./modules/Todo";
import { displayTodos } from "./modules/displayTodos";

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

// Add populate/load storage on initial load

import { populateLocalStorage } from "./modules/populateLocalStorage";

if (!localStorage.getItem("Default Project")) {
    populateLocalStorage();
} else {

    // Iterate through each key in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedData = localStorage.getItem(key);

        // Parse the stored data
        const parsedStorage = JSON.parse(storedData);

        // Find or create a TodoGroup with the parsed name
        const parsedTodoGroup = TodoGroup.findOrCreate(parsedStorage.name);

        // Clear existing todos in the group to avoid duplicates
        parsedTodoGroup.todos = [];

        // Create and add each Todo to the parsedTodoGroup
        parsedStorage.todos.forEach(todo => {
            const newTodo = new Todo(todo.title, todo.dueDate, todo.priority, todo.finished);
            parsedTodoGroup.addTodo(newTodo);  // Add each Todo to the TodoGroup
        });

        // Display the todos from the parsedTodoGroup
        displayTodos(parsedTodoGroup);
        if (parsedTodoGroup.name !== "Default Project") displayTodoGroup(parsedTodoGroup.name)
    }
}