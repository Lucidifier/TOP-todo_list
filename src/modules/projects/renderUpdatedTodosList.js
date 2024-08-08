import { projectArr } from "./project";

function renderUpdatedTodosList() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const todosList = document.querySelector('.projects_section_content > div:nth-child(1)');
  

projectArr.forEach(function(elem) {
  if(elem.selected === 1) {
    todosList.innerText = '';
    elem.listArray.forEach(function(elem) {
      const todo = document.createElement('div');
      const todoTitle = document.createElement('p');
      const todoDescription = document.createElement('p');
      
      todoTitle.innerText = elem.title;
      todoDescription.innerText = elem.description;
    
      todo.append(todoTitle, todoDescription);
      
      todosList.appendChild(todo);
      console.log('succ');
    })
    } else {todosList.innerText = 'no todosXD';}
  }) 
}

export default renderUpdatedTodosList;
// projectArr.forEach(elem => {
//   if(elem.selected === 1 && elem.listArray.length != 0) {
//   } else { 
//   todosList.innerText = 'no todo selected';
//   }
// })