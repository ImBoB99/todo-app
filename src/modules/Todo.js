class Todo {
    
    constructor(title, dueDate, priority) {
        if (!title || title.trim().length === 0) {
            throw new Error("Title must be at least one character long");
        }
        
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export {Todo}