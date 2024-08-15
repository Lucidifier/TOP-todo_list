import renderProjectsModule from './renderProjectsModule.js';
import renderSidebarModule from "../sidebar/renderSidebarModule";

import { Project, projectArr } from './project.js';

function createNewProject() {
  const nameInput = document.querySelector('.projects_section_content > form >input:nth-child(2)');
  const nameValue = nameInput.value;

  const descriptionInput = document.querySelector('.projects_section_content > form >input:nth-child(4)');
  const descriptionValue = descriptionInput.value;

  const createdProject = new Project(nameValue, descriptionValue);
  
  projectArr.push(createdProject);
  
  const projectArrJson = JSON.stringify(projectArr);
  localStorage.setItem('projectArrStored', projectArrJson); 

  renderProjectsModule();
  renderSidebarModule();
}

export default createNewProject;