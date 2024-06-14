import { projectArr } from "./project";

function renderCurrentProject() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const projectsModuleCurrentProjects = document.createElement('div');

  if(localStorage.length > 0) {
  const projectJsonString = localStorage.getItem('newCreatedProject');
  const projectParsed = JSON.parse(projectJsonString);
  projectArr.push(projectParsed);  
  }

  console.log(projectArr);
  for (let i=0; i< projectArr.length; i++) {
    let currentProject = document.createElement('div');
    let currentProjectName = document.createElement('p');
    let currentProjectDescription = document.createElement('p');
    currentProjectName.innerText = projectArr[i].name;
    currentProjectDescription.innerText = projectArr[i].description;
    currentProject.appendChild(currentProjectName);
    currentProject.appendChild(currentProjectDescription);
    projectsModuleCurrentProjects.appendChild(currentProject);
  }
  projectsModuleContent.appendChild(projectsModuleCurrentProjects);
}

export default renderCurrentProject;