import addNewProject from "./addNewProject";
import renderProjectFunctionality from "./renderProjectFunctionality";
import renderProjectsModule from "./renderProjectsModule";
import addProjectInfo from "./createProjectForm";
import createNewProject from "./projectFromButton";

function addEventListeners() {
  const addNew = document.querySelector('.projects_section_content > div:nth-child(3)');
  // addNew.addEventListener('click', addNewProject);
  addNew.addEventListener('click', addProjectInfo);

  // const addButton = document.querySelector('.projects_section_content > form');
  // addButton.addEventListener('click', createNewProject);
  console.log('event listener');
}

export default addEventListeners;