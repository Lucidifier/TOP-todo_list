import addNewProject from "./addNewProject";
import renderProjectFunctionality from "./renderProjectFunctionality";
import renderProjectsModule from "./renderProjectsModule";
import addProjectInfo from "./createProjectForm";
import createNewProject from "./projectFromButton";
import selectCurrentProject from "./clickSelectCurrentProject";
import { projectArr } from "./project";

function addEventListeners() {
  const addNew = document.querySelector('.projects_section_content > div:last-child');
  const projectList = document.querySelectorAll('.projects_section_content > div:nth-child(2) > div')
  // addNew.addEventListener('click', addNewProject);
  addNew.addEventListener('click', addProjectInfo);

  console.log(projectList);
  //ADD EVENT LISTENER  TO EACH PROJECT IN  PROJECT LIST
  projectList.forEach(node => {
    node.addEventListener('click', function() {
      let dataValue = this.dataset.id;
      console.log(dataValue);
      //RESET EACH PROJECT
      projectList.forEach(project => {
        project.removeAttribute('class');
      })
      projectArr.forEach(elem => {
        elem.selected = 0;
      })
    
      projectArr[dataValue].selected = 1;
      node.setAttribute('class', 'project_selected');
      console.log(projectArr);
    })
  })
  // projectList.addEventListener('click', selectCurrentProject);

  // const addButton = document.querySelector('.projects_section_content > form');
  // addButton.addEventListener('click', createNewProject);
  console.log('event listener');
}

export default addEventListeners;