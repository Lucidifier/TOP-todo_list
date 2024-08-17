import { projectArr } from "../projects/project";
import { format } from "date-fns";
import changeStatusCheckbox from "./statusCheckboxFunctionality";
import renderTodosFunctionality from "./renderTodosFunctionality";

function renderTodoDetails() {
  console.log('render todo details2');
  const todosModuleContent = document.querySelector('.todos_section_content');
  const todoDetails = document.createElement('div');

  for(const elem of projectArr) {
    if(elem.selected === 1) {
      for(const element of elem.listArray) {
        if(element.selected === 1 && elem.listArray.length > 0) {

          todosModuleContent.removeChild(todosModuleContent.firstChild);

          let currentTodo = document.createElement('div');
          let currentTodoTitle = document.createElement('p');
          let currentTodoDescription = document.createElement('p');
          let currentTodoDueDate = document.createElement('p');
          let currentTodoPriority = document.createElement('p');
          let currentTodoStatusLabel = document.createElement('label')
          let currentTodoStatusCheckbox = document.createElement('input');

          // console.log(projectsModuleTodosListIfRendered.classList)

          currentTodoTitle.innerText = element.title;
          currentTodoDescription.innerText = element.description;
          const formatedDate = format(element.dueDate, 'dd/MMM/y');
          currentTodoDueDate.innerText = formatedDate;

          switch (element.priority) {
            case 3:
              currentTodoPriority.innerText = 'High';
              break;
            case 2:
              currentTodoPriority.innerText = 'Medium';
              break;
            case 1:
              currentTodoPriority.innerText = 'Low';
              break;
          }

          currentTodoStatusCheckbox.type = 'checkbox';
          currentTodoStatusCheckbox.name = 'statusCheckbox';
          currentTodoStatusCheckbox.id = 'statusCheckbox';
          currentTodoStatusLabel.for = 'statusCheckbox';
          currentTodoStatusLabel.innerText = 'Task complete';

          if(element.status == true) {
            currentTodoStatusCheckbox.checked = false;
          } else {
            currentTodoStatusCheckbox.checked = true;
          };

          currentTodoStatusCheckbox.addEventListener('change', changeStatusCheckbox);
          
          currentTodo.append(currentTodoTitle, currentTodoDescription, currentTodoDueDate, currentTodoPriority, currentTodoStatusLabel, currentTodoStatusCheckbox);
          todoDetails.appendChild(currentTodo);
          todosModuleContent.insertBefore(todoDetails, todosModuleContent.firstChild);
        }
      }
    }
  }
}

export default renderTodoDetails;