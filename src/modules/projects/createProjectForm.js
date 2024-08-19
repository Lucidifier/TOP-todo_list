import createNewProject from "./projectFromButton";
import resetTodosStatus from "./resetTodosStatus";
import renderTodosModule from "../todos/renderTodosModule";

function addProjectInfo() {
  resetTodosStatus();
  renderTodosModule();
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
  projectNameLabel.setAttribute('for', 'projectName');
  projectNameInput.type = 'text';
  projectNameInput.id = 'projectName';
  projectNameInput.name = 'projectName';
  projectNameInput.maxLength = 15;

  projectDescriptionLabel.innerText = 'Description: ';
  projectDescriptionLabel.setAttribute('for', 'projectDescription');
  projectDescriptionInput.type = 'text';
  projectDescriptionInput.id = 'projectDescription';
  projectDescriptionInput.name = 'projectDescription';
  projectDescriptionInput.maxLength = 15;

  projectAddButton.innerText = '+';

  newProjectForm.appendChild(projectNameLabel);
  newProjectForm.appendChild(projectNameInput);
  newProjectForm.appendChild(projectDescriptionLabel);
  newProjectForm.appendChild(projectDescriptionInput);
  newProjectForm.appendChild(projectAddButton);
  newProjectForm.classList.add('new_project_form');

  projectsModuleContent.appendChild(newProjectForm);

  newProjectForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  projectAddButton.addEventListener('click', createNewProject);

}

export default addProjectInfo;