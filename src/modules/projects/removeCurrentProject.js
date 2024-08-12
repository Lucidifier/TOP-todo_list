import { projectArr } from "./project";
import renderProjectsModule from "./renderProjectsModule";
import resetProjects from "./resetProjectsStatus";
import { projectArrParsed } from "./renderCurrentProject";
import resetTodosStatus from "./resetTodosStatus";
import renderTodosModule from "../todos/renderTodosModule";

function removeSelectedProject() {
  resetTodosStatus();
  renderTodosModule();
  
  projectArr.forEach(elem => {
    if(elem.selected === 1) {
      let elemIndex = projectArr.indexOf(elem);
      projectArr.splice(elemIndex,1);
    }
  })
  
  if(projectArr.length === 0) {
    localStorage.clear();
  }

  if(projectArr.length !== 0) {
  const projectArrJson = JSON.stringify(projectArr);
  localStorage.setItem('projectArrStored', projectArrJson); 
  }

  renderProjectsModule();
}

export default removeSelectedProject;