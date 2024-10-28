import "./styles.css";
import { Todo } from "./modules/Todo";
import { TodoGroup } from "./modules/TodoGroup";

const todo1 = new Todo ("Walk Dog", "Take dog for a walk", "2014-02-8", true)
const todo2 = new Todo ("Brush Dog", "Brush the dog", "2024-04-6", false)
const todo3 = new Todo ("Wash Dog", "Wash the dog", "2033-22-12", false)
const project = new TodoGroup ("Hope")

project.addTodo(todo1)
project.addTodo(todo2)
project.addTodo(todo3)

project.displayTodos()
