import { projectArr } from "./project";

function renderTodosList() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const todosList = document.createElement('div');

  if(projectArr.forEach(elem => elem.selected === 1)) {
    projectArr.forEach(elem => {
      if(elem.listArray != 0) {
        const todo = document.createElement('div');
        const todoTitle = document.createElement('p');
        const todoDescription = document.createElement('p');
      
        todoTitle.innerText = elem.listArray[0].title;
        todoDescription.innerText = elem.listArray[0].description;
      
        todo.append(todoTitle, todoDescription);
        todosList.appendChild(todo);
        console.log('succ');
      } 
    })
    } else {todosList.innerText = 'no todo selected';}


  // projectArr.forEach(elem => {
  //   if(elem.selected === 1 && elem.listArray.length != 0) {
  //   } else { 
  //   todosList.innerText = 'no todo selected';
  //   }
  // })

  projectsModuleContent.appendChild(todosList);
}

export default renderTodosList;