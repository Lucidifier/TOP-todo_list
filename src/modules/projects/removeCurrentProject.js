import { projectArr } from "./project";
import renderProjectsModule from "./renderProjectsModule";
import resetProjects from "./resetProjectsStatus";
import { projectArrParsed } from "./renderCurrentProject";

function removeSelectedProject() {
  console.log('removeSelectedProject');
  projectArr.forEach(elem => {
    if(elem.selected === 1) {
      let elemIndex = projectArr.indexOf(elem);
      projectArr.splice(elemIndex,1);

      
    }
  })
  
  console.log(projectArr);
  if(projectArr.length === 0) {
    console.log('locals clear');
    localStorage.clear();
  } else{console.log('locals not cleared')}

  if(projectArr.length !== 0) {
  const projectArrJson = JSON.stringify(projectArr);
  localStorage.setItem('projectArrStored', projectArrJson); 
  }

  renderProjectsModule();
}

export default removeSelectedProject;