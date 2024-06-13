const projectArr = [];

class Project {
  constructor() {
    this.name;
    this.description;
    this.listArray = [];
  }

  setProjectName(newProjectName) {
    this.name = newProjectName;
  }

  setDescription(newProjectDescription) {
    this. description = newProjectDescription;
  }

  createTodo(newTodo) {
    this.listArray.push(newTodo);
  }

}

export {projectArr, Project};