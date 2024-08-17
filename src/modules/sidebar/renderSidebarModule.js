import { projectArr } from "../projects/project";
import { formatDistanceToNow } from "date-fns";
import Todo from "../todos/todos.js"
import renderTodoDetails from "../todos/renderTodoDetails.js";
import renderProjectsModule from "../projects/renderProjectsModule.js";

function renderSidebarModule() {
  console.log('sidebarModule rendered');
  console.log(projectArr);
  const sidebarModuleContent = document.querySelector('.sidebar_section_content');

  //reset module content
  while (sidebarModuleContent.firstChild) {
  sidebarModuleContent.removeChild(sidebarModuleContent.firstChild);
  };

  for(const elem of projectArr) {
    const sidebarProjectDiv = document.createElement('div');
    const sidebarProjectTitle = document.createElement('p');
    const sidebarProjectTodo = document.createElement('div');
    sidebarProjectTitle.innerText = elem.name;

    for(const element of elem.listArray) {
      Object.setPrototypeOf(element, Todo.prototype);
      console.log('XD',element);

      const sidebarProjectTodoDiv = document.createElement('div');
      const sidebarProjectTodoTitleCountdownContainer = document.createElement('div');
      const sidebarProjectTodoTitle = document.createElement('p');
      sidebarProjectTodoTitle.classList.add('sidebar_todo_title');
      sidebarProjectTodoTitle.innerText = element.title;
      const sidebarProjectTodoDateCountdown = document.createElement('p');
      const timeBetweenNowAndDueDate = formatDistanceToNow(element.dueDate);
      sidebarProjectTodoDateCountdown.innerText = `Due in: ${timeBetweenNowAndDueDate}`;
      const sidebarProjectTodoStatus = document.createElement('input');
      sidebarProjectTodoStatus.type = 'checkbox';

      if(element.status == false) {
        console.log(element.status);
        sidebarProjectTodoStatus.checked = true;
        sidebarProjectTodoDiv.removeAttribute('class');
        sidebarProjectTodoDiv.setAttribute('class', 'sidebar_todo_div_complete');
        console.log('false');
      } else if(element.status == true) {
        console.log(element.status);
        sidebarProjectTodoStatus.checked = false;
        sidebarProjectTodoDiv.removeAttribute('class');
        sidebarProjectTodoDiv.setAttribute('class', 'sidebar_todo_div');
        console.log('true');
      };

      sidebarProjectTodoStatus.addEventListener('change', function() {
        if(this.checked) {
          sidebarProjectTodoDiv.setAttribute('class', 'sidebar_todo_div_complete');
          element.setStatus();
          console.log('111');
          const projectArrJson = JSON.stringify(projectArr);
          localStorage.setItem('projectArrStored', projectArrJson);
          renderProjectsModule();
          renderTodoDetails();
          } else {
            sidebarProjectTodoDiv.setAttribute('class', 'sidebar_todo_div');
            element.setStatus();
            console.log('222');
            const projectArrJson = JSON.stringify(projectArr);
            localStorage.setItem('projectArrStored', projectArrJson);
            renderProjectsModule();
            renderTodoDetails();
          }
      });

      sidebarProjectTodoTitleCountdownContainer.append(sidebarProjectTodoTitle, sidebarProjectTodoDateCountdown);
      sidebarProjectTodoDiv.append(sidebarProjectTodoTitleCountdownContainer, sidebarProjectTodoStatus);
      sidebarProjectTodo.appendChild(sidebarProjectTodoDiv);
      // sidebarProjectTitle.append(sidebarProjectTodoTitle, sidebarProjectTodoDateCountdown);
    }
    sidebarProjectDiv.append(sidebarProjectTitle,sidebarProjectTodo);
    sidebarProjectDiv.setAttribute('class', 'sidebar_project_div');
    sidebarModuleContent.appendChild(sidebarProjectDiv);
  }

}

export default renderSidebarModule;