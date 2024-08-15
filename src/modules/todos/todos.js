class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = false;
    this.selected = 0;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDueDate(newDate) {
    this.dueDate = newDate;
  }
  setPriority(newPriority) {
    if(newPriority === 'High') {
      this.priority = 3;
    } else if(newPriority === 'Medium') {
      this.priority = 2;
    } else {
      this.priority = 1;
    }
  }
  setStatus() {
    if(this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
}

export default Todo;