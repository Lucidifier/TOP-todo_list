import renderCurrentProject from "./renderCurrentProject";
import renderTodosList from "./renderTodosList";
import renderProjectFunctionality from "./renderProjectFunctionality";
import addEventListeners from "./eventListeners";

function renderProjectsModule() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  while (projectsModuleContent.firstChild) {
    projectsModuleContent.removeChild(projectsModuleContent.firstChild);
  };
 renderTodosList();
 renderCurrentProject();
 renderProjectFunctionality();
 addEventListeners();
}

export default renderProjectsModule;