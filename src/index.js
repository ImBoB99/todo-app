import "./styles.css";
import { TodoGroup } from "./modules/TodoGroup";
import {displayTodoGroup} from "./modules/displayTodoGroup";
import { state } from "./modules/state";
import { initializeTodoForm } from "./modules/initializeTodoForm";
import { initializeTodoGroupForm } from "./modules/initializeTodoGroupForm";


// Initialize a default todo group and add event listeners to buttons

new TodoGroup("Default Project");

displayTodoGroup("Default Project");

initializeTodoForm(state.currentTodoGroup);

initializeTodoGroupForm();