function renderProjectFunctionality() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const addNewProjectButton = document.createElement('div');
  addNewProjectButton.innerText = 'add new project';
  projectsModuleContent.appendChild(addNewProjectButton);
}

export default renderProjectFunctionality;