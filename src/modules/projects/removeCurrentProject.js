import { projectArr } from "./project";
import renderProjectsModule from "./renderProjectsModule";
import resetProjects from "./resetProjectsStatus";

function removeSelectedProject() {
  console.log('before removing: ' + projectArr);
  projectArr.forEach(elem => {
    if(elem.selected === 1) {
      console.log('selected element: ' + elem.name);
      let elemIndex = projectArr.indexOf(elem);
      console.log('elem index: ' +elemIndex);
      projectArr.splice(elemIndex,1);
      // console.log(projectArr);
    }
  })
  console.log('After removal:' + projectArr);
  resetProjects();
  renderProjectsModule();
}

export default removeSelectedProject;