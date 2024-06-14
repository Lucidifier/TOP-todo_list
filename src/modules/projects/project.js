const projectArr = [];

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.listArray = [];
    this.selected = 0;
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