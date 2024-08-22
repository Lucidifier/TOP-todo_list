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
  const projectNameDiv = document.createElement('div');
  const projectNameLabel = document.createElement('label');
  const projectNameInput = document.createElement('input');
  const projectDescriptionDiv = document.createElement('div');
  const projectDescriptionLabel = document.createElement('label');
  const projectDescriptionInput = document.createElement('input');
  const projectAddButton = document.createElement('button');

  projectNameLabel.innerText = 'Name: ';
  projectNameLabel.setAttribute('for', 'projectName');
  projectNameInput.type = 'text';
  projectNameInput.id = 'projectName';
  projectNameInput.name = 'projectName';
  projectNameInput.maxLength = 15;
  projectNameDiv.append(projectNameLabel, projectNameInput);
  projectNameDiv.classList.add('new_project_form_divs');

  projectDescriptionLabel.innerText = 'Description: ';
  projectDescriptionLabel.setAttribute('for', 'projectDescription');
  projectDescriptionInput.type = 'text';
  projectDescriptionInput.id = 'projectDescription';
  projectDescriptionInput.name = 'projectDescription';
  projectDescriptionInput.maxLength = 15;
  projectDescriptionDiv.append(projectDescriptionLabel, projectDescriptionInput);
  projectDescriptionDiv.classList.add('new_project_form_divs');

  projectAddButton.innerText = 'Add';

  
  newProjectForm.append(projectNameDiv, projectDescriptionDiv, projectAddButton);
  newProjectForm.classList.add('new_project_form');

  projectsModuleContent.appendChild(newProjectForm);

  newProjectForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  projectAddButton.addEventListener('click', createNewProject);

}

export default addProjectInfo;