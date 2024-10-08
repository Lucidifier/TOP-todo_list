import { projectArr } from "./project";
import renderProjectsModule from "./renderProjectsModule";
import { projectArrParsed } from "./renderCurrentProject";
import resetTodosStatus from "./resetTodosStatus";
import renderTodosModule from "../todos/renderTodosModule";
import renderSidebarModule from "../sidebar/renderSidebarModule";

function editProjectInfo() {
  resetTodosStatus();
  renderTodosModule();
  
  projectArr.forEach(elem => {
    if(elem.selected === 1) {

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
      const projectEditButton = document.createElement('button');

      projectNameLabel.innerText = 'Name: ';
      projectNameLabel.setAttribute('for', 'projectName');
      projectNameInput.type = 'text';
      projectNameInput.id = 'projectName';
      projectNameInput.name = 'projectName';
      projectNameDiv.append(projectNameLabel, projectNameInput);
      projectNameDiv.classList.add('new_project_form_divs');

      projectDescriptionLabel.innerText = 'Description: '; 
      projectDescriptionLabel.setAttribute('for', 'projectDescription');
      projectDescriptionInput.type = 'text';
      projectDescriptionInput.id = 'projectDescription';
      projectDescriptionInput.name = 'projectDescription';
      projectDescriptionDiv.append(projectDescriptionLabel, projectDescriptionInput);
      projectDescriptionDiv.classList.add('new_project_form_divs');

      projectNameInput.value = elem.name;
      projectDescriptionInput.value = elem.description;

      
      newProjectForm.append(projectNameDiv, projectDescriptionDiv, projectEditButton);
      newProjectForm.classList.add('new_project_form');
      projectsModuleContent.appendChild(newProjectForm);

      newProjectForm.addEventListener('submit', function(event) {
        event.preventDefault();
      });

      projectEditButton.innerText = 'Save';
      projectEditButton.addEventListener('click', function() {
          elem.setProjectName(projectNameInput.value);
          elem.setDescription(projectDescriptionInput.value);
        
          const projectArrJson = JSON.stringify(projectArr);
          localStorage.setItem('projectArrStored', projectArrJson); 
          
          renderProjectsModule();
          renderSidebarModule();
        })
      }
    })
    
}

export default editProjectInfo;