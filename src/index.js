import "./styles.css";
import { TodoGroup } from "./modules/TodoGroup";
import {displayTodoGroup} from "./modules/displayTodoGroup";
import { state } from "./modules/state";
import { initializeTodoForm } from "./modules/initializeTodoForm";
import { initializeTodoGroupForm } from "./modules/initializeTodoGroupForm";


// Initial initialization

new TodoGroup("Default Project");

displayTodoGroup("Default Project");

initializeTodoForm(state.currentTodoGroup);

initializeTodoGroupForm();