import {projectArr, Project} from './project.js'

function createNewProject() {
  const newProject = new Project();
  newProject.name = 'Default Project';
  newProject.description = 'This is a default project';
  projectArr.push(newProject);
}

export default createNewProject;
