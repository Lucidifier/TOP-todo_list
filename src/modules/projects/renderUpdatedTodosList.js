import { projectArr } from "./project";

function renderUpdatedTodosList() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const todosList = document.querySelector('.projects_section_content > div:nth-child(1)');
  

projectArr.forEach(function(elem) {
  if(elem.selected === 1) {
    todosList.innerText = '';
    let todosArray = elem.listArray;
    if(elem.listArray.length !== 0) {
      elem.listArray.forEach(function(elem) {
        let elemIndex = todosArray.indexOf(elem);
        let todo = document.createElement('div');
        let todoTitle = document.createElement('p');
        let todoDescription = document.createElement('p');
      
        todoTitle.innerText = elem.title;
        todoDescription.innerText = elem.description;

        todo.setAttribute('data-id', elemIndex);
    
        todo.append(todoTitle, todoDescription);
      
        todosList.appendChild(todo);
        })
      } else {todosList.innerText = 'no todos to showxd';}
    }
  }) 
}

export default renderUpdatedTodosList;
// projectArr.forEach(elem => {
//   if(elem.selected === 1 && elem.listArray.length != 0) {
//   } else { 
//   todosList.innerText = 'no todo selected';
//   }
// })