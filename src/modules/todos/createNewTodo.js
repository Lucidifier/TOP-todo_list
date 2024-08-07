import Todo from "./todos";
import { projectArr } from "../projects/project";
import renderTodosModule from "./renderTodosModule";
import resetProjects from "../projects/resetProjectsStatus";
import renderProjectsModule from "../projects/renderProjectsModule";

function createNewTodo() {
  console.log('create new todo');
  console.log(projectArr);
  const todoTitle = document.querySelector('.new_todo_form > input:nth-child(2)');
  const todoDescription = document.querySelector('.new_todo_form > input:nth-child(4)');
  const todoDueDate = document.querySelector('.new_todo_form > input:nth-child(6)');
  const todoPriority = document.querySelector('.new_todo_form > input:nth-child(8)');

  const newTodo = new Todo();
  newTodo.setTitle(todoTitle.value);
  newTodo.setDescription(todoDescription.value);
  newTodo.setDueDate(todoDueDate.value);
  newTodo.setPriority(todoPriority.value);
  
  console.log(newTodo);

  projectArr.forEach(elem => {
    if(elem.selected === 1) {
      elem.listArray.push(newTodo);
      console.log('todo added');
      console.log(projectArr);
    }
  })

  const projectArrJson = JSON.stringify(projectArr);
  localStorage.setItem('projectArrStored', projectArrJson); 
  
  renderTodosModule();
  renderProjectsModule();

}

export default createNewTodo;