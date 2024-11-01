import { TodoGroup } from "./TodoGroup";
import { currentTodoGroup } from "./state";
import { setCurrentTodoGroup } from "./state";

function submitTodoGroup(todoGroupName) {
    const todoGroupsContainer = document.querySelector(".todo-groups");

    new TodoGroup(todoGroupName);

    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")
    menuItem.setAttribute("todo-group", `${todoGroupName}`)
    const menuIcon = document.createElement("div")
    menuIcon.classList.add("menu-icon")
    const menuIconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    menuIconSvg.setAttribute("viewBox", "0 0 24 24");
    menuIconSvg.setAttribute("fill", "none");

    menuIconSvg.innerHTML = `
                            <g stroke-width="0"></g>
                            <g stroke-linecap="round" stroke-linejoin="round"></g>
                            <g>
                                <path
                                    d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H7Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H7C6.44772 13 6 12.5523 6 12Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H7Z"
                                    fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.625 21H18.375C20.3918 21 22 19.3435 22 17.3333V6.66667C22 4.65653 20.3918 3 18.375 3H5.625C3.60818 3 2 4.65653 2 6.66667V17.3333C2 19.3435 3.60818 21 5.625 21ZM5.625 5C4.74233 5 4 5.73129 4 6.66667V17.3333C4 18.2687 4.74233 19 5.625 19H14.375C15.2577 19 16 18.2687 16 17.3333V6.66667C16 5.73129 15.2577 5 14.375 5H5.625ZM18.375 19H17.6042C17.8575 18.4987 18 17.9317 18 17.3333V6.66667C18 6.06833 17.8575 5.50132 17.6042 5H18.375C19.2577 5 20 5.73129 20 6.66667V17.3333C20 18.2687 19.2577 19 18.375 19Z"
                                    fill="currentColor"></path>
                            </g>
    `;
    menuIcon.appendChild(menuIconSvg);

    const menuText = document.createElement("span")

    menuText.textContent = todoGroupName;
    menuText.classList.add("menu-text")

    menuItem.append(menuIcon, menuText)

    todoGroupsContainer.append(menuItem)

    menuItem.addEventListener("click", () => {
        const projectIndex = TodoGroup.instances.findIndex(group => group.name === todoGroupName)
        console.log(projectIndex)

        // Switch the active group on click

        setCurrentTodoGroup(TodoGroup.instances[projectIndex])

        console.log(currentTodoGroup)
    })

    console.log(TodoGroup.instances)
}

export {submitTodoGroup}