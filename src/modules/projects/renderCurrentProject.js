import { projectArr } from "./project";

function renderCurrentProject() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const currentProject = document.createElement('div');
  const currentProjectName = document.createElement('p');
  const currentProjectDescription = document.createElement('p');
  currentProjectName.innerText = projectArr[0].name;
  currentProjectDescription.innerText = projectArr[0].description;
  currentProject.appendChild(currentProjectName);
  currentProject.appendChild(currentProjectDescription);
  projectsModuleContent.appendChild(currentProject);
}

export default renderCurrentProject;