// WEEKLY TODOS

import { isToday } from "date-fns";

import { TodoGroup } from "./TodoGroup";

import { displayTodo } from "./displayTodo";

const todayTodos = document.getElementById("todayTodos");

todayTodos.addEventListener("click", displayTodayTodos);

function displayTodayTodos() {
    const content = document.querySelector(".content");

    content.innerHTML = "";

    const todoGroupName = document.createElement("h1");

    todoGroupName.textContent = "Today's Todos";

    content.append(todoGroupName);

    TodoGroup.instances.forEach(instance => {
        instance.todos.forEach((todo, index) => {
            const isDueToday = isToday(todo.dueDate)
            if (isDueToday) {
                displayTodo(todo.title, todo.dueDate, todo.priority, index, todo.finished)
            }
        })
    });
}

export {displayTodayTodos}