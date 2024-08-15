import { projectArr } from "../projects/project";
import { formatDistanceToNow } from "date-fns";

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
      sidebarProjectTodoTitle.classList.add('sidebar_todo_title')
      sidebarProjectTodoTitle.innerText = element.title;
      const sidebarProjectTodoDateCountdown = document.createElement('p');
      const timeBetweenNowAndDueDate = formatDistanceToNow(element.dueDate);
      sidebarProjectTodoDateCountdown.innerText = `Due in: ${timeBetweenNowAndDueDate}`;

      sidebarProjectTitle.append(sidebarProjectTodoTitle, sidebarProjectTodoDateCountdown);
    }
    sidebarProjectDiv.appendChild(sidebarProjectTitle);
    sidebarModuleContent.appendChild(sidebarProjectDiv);
  }

}

export default renderSidebarModule;