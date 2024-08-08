import {projectArr, Project} from './project.js'
import renderProjectsModule from './renderProjectsModule.js';
import renderProjectFunctionality from './renderProjectFunctionality.js';

function addNewProject() {
  const newProject = new Project();
  newProject.name = 'Project1';
  newProject.description = 'This is Project1';
  projectArr.splice(0,1);
  projectArr.push(newProject);

  const projectArrJson = JSON.stringify(projectArr);
  localStorage.setItem('projectArrStored', projectArrJson); 
  
  renderProjectsModule();
}



export default  addNewProject;