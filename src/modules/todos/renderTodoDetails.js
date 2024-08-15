import { projectArr } from "../projects/project";
import { format } from "date-fns";
import renderTodosFunctionality from "./renderTodosFunctionality";

function renderTodoDetails() {
  console.log('render todo details2');
  const todosModuleContent = document.querySelector('.todos_section_content');
  const todoDetails = document.createElement('div');
  let todoDetailsTruth = document.querySelector('.todos_section_content > div:first-child');
  const projectsModuleTodosListIfRendered = document.querySelector('.projects_section_content > div:nth-child(1) > div > div');

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
          // console.log(projectsModuleTodosListIfRendered.classList)

          currentTodoTitle.innerText = element.title;
          currentTodoDescription.innerText = element.description;
          console.log('SHOW DATE',element.dueDate);
          const formatedDate = format(element.dueDate, 'dd/MMM/y');
          console.log('SHOW FORMATED DATE',formatedDate);
          currentTodoDueDate.innerText = formatedDate;
          currentTodoPriority.innerText = element.priority;
          currentTodo.append(currentTodoTitle, currentTodoDescription, currentTodoDueDate, currentTodoPriority);
          todoDetails.appendChild(currentTodo);
          todosModuleContent.insertBefore(todoDetails, todosModuleContent.firstChild);
          console.log('DETAILS CREATION COMPLETE.');
        }
        // } else {
        //   console.log('?????');
        //   todoDetails.innerText = 'no todo selected2';
        //   todosModuleContent.appendChild(todoDetails);
        // }
        // } else if(projectsModuleTodosListIfRendered.innerText = 'no todos') {
        //   todoDetails.innerText = 'no todo selected';
        //   todosModuleContent.appendChild(todoDetails);
        // } else{console.log('BIGGUS ERRORUS!!!')} 
        // // } else if{ todoDetailsTruth} {
        //   todoDetails.innerText = 'no todo selected';
        //   todosModuleContent.appendChild(todoDetails);
        //   renderTodosFunctionality(); 
      }
    }
  }
}

export default renderTodoDetails;