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
          let currentTodoTitleDiv = document.createElement('div');
          let currentTodoTitleSpan = document.createElement('span');
          let currentTodoTitle = document.createElement('p');
          let currentTodoDescriptionDiv = document.createElement('div');
          let currentTodoDescriptionSpan = document.createElement('span');
          let currentTodoDescription = document.createElement('p');
          let currentTodoDueDateDiv = document.createElement('div');
          let currentTodoDueDateSpan = document.createElement('span');
          let currentTodoDueDate = document.createElement('p');
          let currentTodoPriorityDiv = document.createElement('div');
          let currentTodoPrioritySpan = document.createElement('span');
          let currentTodoPriority = document.createElement('p');
          let currentStatusDiv = document.createElement('div');
          let currentTodoStatusLabel = document.createElement('label')
          let currentTodoStatusCheckbox = document.createElement('input');

          // console.log(projectsModuleTodosListIfRendered.classList)

          currentTodoTitleSpan.innerText = 'Title:'
          currentTodoTitle.innerText = `${element.title}`;
          currentTodoDescriptionSpan.innerText = 'Description:'
          currentTodoDescription.innerText = `${element.description}`;
          currentTodoDueDateSpan.innerText = 'Due Date:'
          const formatedDate = format(element.dueDate, 'dd/MMM/y');
          currentTodoDueDate.innerText = `${formatedDate}`;

          currentTodoPrioritySpan.innerText = 'Priority:'
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
          currentTodoStatusLabel.innerText = 'Task complete:';

          if(element.status == true) {
            currentTodoStatusCheckbox.checked = false;
          } else {
            currentTodoStatusCheckbox.checked = true;
          };

          currentTodoStatusCheckbox.addEventListener('change', changeStatusCheckbox);

          currentTodoTitleDiv.append(currentTodoTitleSpan, currentTodoTitle);
          currentTodoDescriptionDiv.append(currentTodoDescriptionSpan, currentTodoDescription);
          currentTodoDueDateDiv.append(currentTodoDueDateSpan, currentTodoDueDate);
          currentTodoPriorityDiv.append(currentTodoPrioritySpan, currentTodoPriority);
          currentStatusDiv.append(currentTodoStatusLabel, currentTodoStatusCheckbox);
          currentTodo.append(currentTodoTitleDiv, currentTodoDescriptionDiv, currentTodoDueDateDiv, currentTodoPriorityDiv, currentStatusDiv);
          todoDetails.appendChild(currentTodo);
          todosModuleContent.insertBefore(todoDetails, todosModuleContent.firstChild);
        }
      }
    }
  }
}

export default renderTodoDetails;