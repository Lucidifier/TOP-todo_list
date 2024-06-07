import {projectArr, Project} from './project.js'

function createDefaultProject() {
  const newProject = new Project();
  newProject.name = 'Default Project';
  newProject.description = 'This is a default project';
  projectArr.push(newProject);
}

export default createDefaultProject;
