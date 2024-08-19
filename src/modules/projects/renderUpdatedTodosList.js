import { projectArr } from "./project";

function renderUpdatedTodosList() {
  const todosList = document.querySelector('.projects_section_content > div:nth-child(1)');
  const todosListEmpty1 = document.createElement('p');
  

projectArr.forEach(function(elem) {
  if(elem.selected === 1) {
    while (todosList.firstChild) {
      todosList.removeChild(todosList.firstChild);
    };
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
        todo.classList.add('new_created_project');
    
        todo.append(todoTitle, todoDescription);
      
        todosList.appendChild(todo);
        todosList.classList.remove('empty_todo_list');
        })
      } else {
        todosListEmpty1.innerText = 'Folder empty';
        todosList.appendChild(todosListEmpty1);
        todosList.classList.add('new_created_project', 'empty_todo_list');
      }
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