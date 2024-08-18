function renderProjectFunctionality() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const projectFunctions = document.createElement('div');
  const addNewProjectButton = document.createElement('div');
  const removeProject = document.createElement('div');
  const editProjectInfoButton = document.createElement('div');

  addNewProjectButton.innerText = 'Add Folder';
  projectFunctions.appendChild(addNewProjectButton);

  removeProject.innerText = 'Remove Folder';
  projectFunctions.appendChild(removeProject);

  editProjectInfoButton.innerText = 'Edit Folder';
  projectFunctions.appendChild(editProjectInfoButton);

  projectsModuleContent.appendChild(projectFunctions);
}

export default renderProjectFunctionality;