function addProjectInfo() {
  //clear projects module 
  const projectsModuleContent = document.querySelector('.projects_section_content');
  while (projectsModuleContent.firstChild) {
    projectsModuleContent.removeChild(projectsModuleContent.firstChild);
  };

  const newProjectForm = document.createElement('form');
  const projectNameLabel = document.createElement('label');
  const projectNameInput = document.createElement('input');
  const projectDescriptionLabel = document.createElement('label');
  const projectDescriptionInput = document.createElement('input');
  const projectAddButton = document.createElement('button');

  projectNameLabel.innerText = 'Name: ';
  projectNameLabel.for = 'projectName';
  projectNameInput.type = 'text';
  projectNameInput.id = 'projectName';
  projectNameInput.name = 'projectName';

  projectDescriptionLabel.innerText = 'Description: ';
  projectDescriptionLabel.for = 'projectDescription';
  projectDescriptionInput.type = 'text';
  projectDescriptionInput.id = 'projectDescription';
  projectDescriptionInput.name = 'projectDescription';

  projectAddButton.innerText = '+';

  newProjectForm.appendChild(projectNameLabel);
  newProjectForm.appendChild(projectNameInput);
  newProjectForm.appendChild(projectDescriptionLabel);
  newProjectForm.appendChild(projectDescriptionInput);
  newProjectForm.appendChild(projectAddButton);

  projectsModuleContent.appendChild(newProjectForm);
  console.log('project form');
}

export default addProjectInfo;