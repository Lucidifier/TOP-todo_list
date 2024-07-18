import addNewProject from "./addNewProject";
import renderProjectFunctionality from "./renderProjectFunctionality";
import renderProjectsModule from "./renderProjectsModule";
import addProjectInfo from "./createProjectForm";
import createNewProject from "./projectFromButton";
import { projectArr } from "./project";
import removeSelectedProject from "./removeCurrentProject";
import resetProjects from "./resetProjectsStatus";

function addEventListeners() {
  const addNew = document.querySelector('.projects_section_content > div:last-child > div:nth-child(1)');
  const projectList = document.querySelectorAll('.projects_section_content > div:nth-child(2) > div');
  const removeProjectButton = document.querySelector('.projects_section_content > div:last-child > div:nth-child(2)');
  // addNew.addEventListener('click', addNewProject);
  addNew.addEventListener('click', addProjectInfo);

  //ADD EVENT LISTENER  TO EACH PROJECT IN  PROJECT LIST
  projectList.forEach(node => {
    node.addEventListener('click', function() {
      resetProjects();
      let dataValue = this.dataset.id;
      projectArr[dataValue].selected = 1;
      node.setAttribute('class', 'project_selected');
      console.log(projectArr);
    })
  })

  removeProjectButton.addEventListener('click', removeSelectedProject);
  // projectList.addEventListener('click', selectCurrentProject);

  // const addButton = document.querySelector('.projects_section_content > form');
  // addButton.addEventListener('click', createNewProject);
}

export default addEventListeners;