const projectArr = [];

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
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