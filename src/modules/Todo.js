class Todo {
    
    constructor(title, description, dueDate, priority) {
        if (!title || title.trim().length === 0) {
            throw new Error("Title must be at least one character long");
        }
        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export {Todo}