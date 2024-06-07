import addNewProject from "./addNewProject";
import renderProjectFunctionality from "./renderProjectFunctionality";
import renderProjectsModule from "./renderProjectsModule";

function addEventListeners() {
  const addNew = document.querySelector('.projects_section_content > div:nth-child(3)');
  addNew.addEventListener('click', addNewProject);
  console.log('event listener');
}

export default addEventListeners;