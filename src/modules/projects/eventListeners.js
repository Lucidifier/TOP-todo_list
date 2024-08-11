import addNewProject from "./addNewProject";
import renderProjectFunctionality from "./renderProjectFunctionality";
import renderProjectsModule from "./renderProjectsModule";
import addProjectInfo from "./createProjectForm";
import createNewProject from "./projectFromButton";
import { projectArr } from "./project";
import { projectArrParsed } from "./renderCurrentProject";
import removeSelectedProject from "./removeCurrentProject";
import resetProjects from "./resetProjectsStatus";
import editProjectInfo from "./editProjectInfo";
import renderTodosList from "./renderTodosList";
import renderUpdatedTodosList from "./renderUpdatedTodosList";
import resetTodosStatus from "./resetTodosStatus";
import addTodosEventListeners from "./todosEventListeners";

function addEventListeners() {
  
  const projectList = document.querySelectorAll('.projects_section_content > div:nth-child(2) > div');
  const addNew = document.querySelector('.projects_section_content > div:last-child > div:nth-child(1)');
  const removeProjectButton = document.querySelector('.projects_section_content > div:last-child > div:nth-child(2)');
  const editProjectInfoButton = document.querySelector('.projects_section_content > div:last-child > div:nth-child(3)');

  addNew.addEventListener('click', addProjectInfo);
  removeProjectButton.addEventListener('click', removeSelectedProject);
  editProjectInfoButton.addEventListener('click', editProjectInfo);

  //ADD EVENT LISTENER  TO EACH PROJECT IN  PROJECT LIST
  projectList.forEach(node => {
    node.addEventListener('click', function() {
      resetProjects();
      let dataValue = this.dataset.id;
      projectArr[dataValue].selected = 1;
      node.setAttribute('class', 'project_selected');
      renderUpdatedTodosList();
      addTodosEventListeners();
    })
  })
}

export default addEventListeners;