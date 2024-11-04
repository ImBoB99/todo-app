// class with constructor for the todo

class Todo {
  constructor(title, dueDate, priority, finished = false) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
  }

  toggleFinished() {
    this.finished = !this.finished;
  }
}

export { Todo };
