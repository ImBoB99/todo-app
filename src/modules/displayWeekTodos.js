import { isThisWeek } from "date-fns";
import { TodoGroup } from "./TodoGroup";
import { displayTodo } from "./displayTodo";

const thisWeekTodos = document.getElementById("thisWeekTodos");

thisWeekTodos.addEventListener("click", displayThisWeekTodos);

function displayThisWeekTodos() {
  const content = document.querySelector(".content");

  content.innerHTML = "";

  const todoGroupName = document.createElement("h1");

  todoGroupName.textContent = "Todos due this week";

  content.append(todoGroupName);

  TodoGroup.instances.forEach((instance) => {
    instance.todos.forEach((todo, index) => {
      const isDueThisWeek = isThisWeek(todo.dueDate);
      if (isDueThisWeek) {
        displayTodo(
          todo.title,
          todo.dueDate,
          todo.priority,
          index,
          todo.finished,
        );
      }
    });
  });
}

export { displayThisWeekTodos };
