import { TodoGroup } from "./TodoGroup"

function checkDuplicateTodoGroup(todoGroupName) {
    for (const instance of TodoGroup.instances) {
        if (instance.name.toLowerCase() === todoGroupName.toLowerCase()) {
            return true;
        }
    }
}

export {checkDuplicateTodoGroup}