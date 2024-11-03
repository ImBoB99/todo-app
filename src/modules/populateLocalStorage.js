
import { TodoGroup } from "./TodoGroup";

function populateLocalStorage() {

    TodoGroup.instances.forEach(instance => {
        localStorage.setItem(instance.name, JSON.stringify(instance))
    });
}

export {populateLocalStorage}