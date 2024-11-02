// class with constructor for the todo

class Todo {
    
    constructor(title, dueDate, priority) {
        
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = false;
    }

    toggleFinished() {
        this.finished = !this.finished;
    }
}

export {Todo}