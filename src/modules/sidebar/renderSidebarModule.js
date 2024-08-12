import { projectArr } from "../projects/project";

function renderSidebarModule() {
  console.log('sidebar rendered');
  const sidebarModuleContent = document.querySelector('.sidebar_section_content');

  //reset module content
  while (sidebarModuleContent.firstChild) {
  sidebarModuleContent.removeChild(sidebarModuleContent.firstChild);
  };

  for(let elem of projectArr) {
    console.log(projectArr);
    const sidebarProjectDiv = document.createElement('div');
    const sidebarProjectTitle = document.createElement('p');
    console.log(elem);
    sidebarProjectTitle.innerText = elem.name;
    for(let element of elem.listArray) {
      console.log('XD',element);
      const sidebarProjectTodoTitle = document.createElement('p');
      sidebarProjectTodoTitle.innerText = element.title;
      sidebarProjectTitle.appendChild(sidebarProjectTodoTitle);
    }
    sidebarProjectDiv.appendChild(sidebarProjectTitle);
    sidebarModuleContent.appendChild(sidebarProjectDiv);
  }

}

export default renderSidebarModule;