import { Project, projectArr } from "./project";

function renderCurrentProject() {
  console.log('renderCurrentProjects');
  console.log(projectArr);
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const projectsModuleCurrentProjects = document.createElement('div');

  const projectArrJsonString = localStorage.getItem('projectArrStored');
  const projectArrParsed = JSON.parse(projectArrJsonString);

  projectArrParsed.forEach(element => {
    Object.setPrototypeOf(element, Project.prototype);
  });
  console.log('PARSED ARR!!');
  console.log(projectArrParsed);
  

  for (let i=0; i< projectArrParsed.length; i++) {
    let currentProject = document.createElement('div');
    let currentProjectName = document.createElement('p');
    let currentProjectDescription = document.createElement('p');
    currentProjectName.innerText = projectArrParsed[i].name;
    currentProjectDescription.innerText = projectArrParsed[i].description;
    currentProject.setAttribute('data-id', i);
    currentProject.appendChild(currentProjectName);
    currentProject.appendChild(currentProjectDescription);
    projectsModuleCurrentProjects.appendChild(currentProject);
  }
  projectsModuleContent.appendChild(projectsModuleCurrentProjects);
}

export default renderCurrentProject;