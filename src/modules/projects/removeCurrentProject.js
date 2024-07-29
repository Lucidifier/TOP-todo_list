import { projectArr } from "./project";
import renderProjectsModule from "./renderProjectsModule";
import resetProjects from "./resetProjectsStatus";

function removeSelectedProject() {
  projectArr.forEach(elem => {
    if(elem.selected === 1) {
      let elemIndex = projectArr.indexOf(elem);
      projectArr.splice(elemIndex,1);
      // console.log(projectArr);
    }
  })
  renderProjectsModule();
}

export default removeSelectedProject;