import { projectArr } from "./project";

function resetProjects() {
  console.log('Projects reseted');
  const projectList = document.querySelectorAll('.projects_section_content > div:nth-child(2) > div');
  projectList.forEach(node => {
    node.removeAttribute('class');
  });
  projectArr.forEach(elem => {
    elem.selected = 0;
    console.log('check if projects reset properly');
    console.log(projectArr);
  })
}

export default resetProjects;