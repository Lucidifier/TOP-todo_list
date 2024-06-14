import renderProjectsModule from './renderProjectsModule.js';

function createNewProject() {
  const nameInput = document.querySelector('.projects_section_content > form >input:nth-child(2)');
  const nameValue = nameInput.value;
  console.log(nameValue);

  const descriptionInput = document.querySelector('.projects_section_content > form >input:nth-child(4)');
  const descriptionValue = descriptionInput.value;
  console.log(descriptionValue);

  const createdProject = {
    name: nameValue,
    description: descriptionValue
  };

  localStorage.clear();
  const createdProjectJson = JSON.stringify(createdProject);
  localStorage.setItem('newCreatedProject', createdProjectJson); 
  console.log(localStorage.newCreatedProject);

  renderProjectsModule();
}

export default createNewProject;