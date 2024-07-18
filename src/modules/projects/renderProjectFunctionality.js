function renderProjectFunctionality() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const projectFunctions = document.createElement('div');
  const addNewProjectButton = document.createElement('div');
  const removeProject = document.createElement('div');

  addNewProjectButton.innerText = 'add new project';
  projectFunctions.appendChild(addNewProjectButton);

  removeProject.innerText = 'remove project';
  projectFunctions.appendChild(removeProject);

  projectsModuleContent.appendChild(projectFunctions);
}

export default renderProjectFunctionality;