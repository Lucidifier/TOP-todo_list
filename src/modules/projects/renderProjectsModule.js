import renderCurrentProject from "./renderCurrentProject";
import renderTodosList from "./renderTodosList";
import renderProjectFunctionality from "./renderProjectFunctionality";
import addEventListeners from "./eventListeners";
import { projectArr } from "./project";
import resetProjects from "./resetProjectsStatus";
import createDefaultProject from "./createDefaultProject";
import renderUpdatedTodosList from "./renderUpdatedTodosList";

function renderProjectsModule() {
  console.log('renderProjectsModule');
  const projectsModuleContent = document.querySelector('.projects_section_content');
  while (projectsModuleContent.firstChild) {
    projectsModuleContent.removeChild(projectsModuleContent.firstChild);
  };
  createDefaultProject();
  renderTodosList();
  renderCurrentProject();
  renderProjectFunctionality();
  addEventListeners();

  console.log(projectArr);
}

export default renderProjectsModule;