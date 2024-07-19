import renderProjectsModule from './renderProjectsModule.js';
import { Project } from './project.js';

function createNewProject() {
  const nameInput = document.querySelector('.projects_section_content > form >input:nth-child(2)');
  const nameValue = nameInput.value;

  const descriptionInput = document.querySelector('.projects_section_content > form >input:nth-child(4)');
  const descriptionValue = descriptionInput.value;

  const createdProject = new Project(nameValue, descriptionValue);
  console.log(createdProject);

  localStorage.clear();
  const createdProjectJson = JSON.stringify(createdProject);
  localStorage.setItem('newCreatedProject', createdProjectJson); 

  renderProjectsModule();
}

export default createNewProject;