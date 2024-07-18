import { projectArr } from "./project";

function resetProjects() {
  const projectList = document.querySelectorAll('.projects_section_content > div:nth-child(2) > div');
  projectList.forEach(node => {
    node.removeAttribute('class');
    projectArr.forEach(elem => {
      elem.selected = 0;
    })
  });
  console.log('Projects reseted');
}

export default resetProjects;