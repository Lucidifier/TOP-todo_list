function renderProjectFunctionality() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const projectFunctions = document.createElement('div');
  const addNewProjectButton = document.createElement('div');
  const removeProject = document.createElement('div');
  const editProjectInfoButton = document.createElement('div');

  addNewProjectButton.innerText = 'ADD';
  projectFunctions.appendChild(addNewProjectButton);

  removeProject.innerText = 'DELETE';
  projectFunctions.appendChild(removeProject);

  editProjectInfoButton.innerText = 'EDIT';
  projectFunctions.appendChild(editProjectInfoButton);

  projectsModuleContent.appendChild(projectFunctions);
}

export default renderProjectFunctionality;