import { projectArr } from "./project";
import renderProjectsModule from "./renderProjectsModule";

function removeSelectedProject() {
  console.log('before removing: ' + projectArr);
  projectArr.forEach(elem => {
    if(elem.selected = 1) {
      console.log(elem);
      console.log('selected element: ' + elem.name);
      let elemIndex = projectArr.indexOf(elem);
      console.log('element index: ' +elemIndex);
      projectArr.splice(elemIndex,1);
      // console.log(projectArr);
    }
  })
  console.log('After removal:' + projectArr);
  renderProjectsModule();
}

export default removeSelectedProject;