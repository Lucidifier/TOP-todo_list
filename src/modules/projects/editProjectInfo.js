import { projectArr } from "./project";
import renderProjectsModule from "./renderProjectsModule";
import { projectArrParsed } from "./renderCurrentProject";

function editProjectInfo() {

  console.log('editProjectInfo');
  projectArr.forEach(elem => {
    if(elem.selected === 1) {

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
      const projectEditButton = document.createElement('button');

      projectNameLabel.innerText = 'Name: ';
      projectNameLabel.setAttribute('for', 'projectName');
      projectNameInput.type = 'text';
      projectNameInput.id = 'projectName';
      projectNameInput.name = 'projectName';

      projectDescriptionLabel.innerText = 'Description: '; 
      projectDescriptionLabel.setAttribute('for', 'projectDescription');
      projectDescriptionInput.type = 'text';
      projectDescriptionInput.id = 'projectDescription';
      projectDescriptionInput.name = 'projectDescription';

      projectNameInput.value = elem.name;
      projectDescriptionInput.value = elem.description;

      newProjectForm.appendChild(projectNameLabel);
      newProjectForm.appendChild(projectNameInput);
      newProjectForm.appendChild(projectDescriptionLabel);
      newProjectForm.appendChild(projectDescriptionInput);
      newProjectForm.appendChild(projectEditButton);

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
        })
      }
    })
    
}

export default editProjectInfo;