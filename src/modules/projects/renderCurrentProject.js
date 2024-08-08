import { Project, projectArr } from "./project";


function renderCurrentProject() {
  console.log('renderCurrentProjects');
  console.log(projectArr);
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const projectsModuleCurrentProjects = document.createElement('div');
  
  const projectArrJsonString = localStorage.getItem('projectArrStored');
  const projectArrParsed = JSON.parse(projectArrJsonString);

  projectArr.splice(0, projectArr.length);
  projectArr.push(...projectArrParsed);
  
  projectArr.forEach(element => {
    Object.setPrototypeOf(element, Project.prototype);
  });

  for (let i=0; i< projectArr.length; i++) {
    let currentProject = document.createElement('div');
    let currentProjectName = document.createElement('p');
    let currentProjectDescription = document.createElement('p');
    currentProjectName.innerText = projectArr[i].name;
    currentProjectDescription.innerText = projectArr[i].description;
    currentProject.setAttribute('data-id', i);
    currentProject.appendChild(currentProjectName);
    currentProject.appendChild(currentProjectDescription);
    projectsModuleCurrentProjects.appendChild(currentProject);
  }
  projectsModuleContent.appendChild(projectsModuleCurrentProjects);
  
}

export default renderCurrentProject;