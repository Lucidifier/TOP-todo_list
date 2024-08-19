import { projectArr } from "./project";

function resetProjects() {
  const projectList = document.querySelectorAll('.projects_section_content > div:nth-child(2) > div');
  projectList.forEach(node => {
    node.classList.remove('project_selected');
  });
  projectArr.forEach(elem => {
    elem.selected = 0;
  })
}

export default resetProjects;``