import Todo from "./todos";
import { projectArr } from "../projects/project";
import renderTodosModule from "./renderTodosModule";
import resetProjects from "../projects/resetProjectsStatus";
import renderProjectsModule from "../projects/renderProjectsModule";
import renderSidebarModule from "../sidebar/renderSidebarModule";
import sortBasedOnPriority from "./sortTodoArray";

function createNewTodo() {
  const todoTitle = document.querySelector('.new_todo_form > input:nth-child(2)');
  const todoDescription = document.querySelector('.new_todo_form > input:nth-child(4)');
  const todoDueDate = document.querySelector('.new_todo_form > input:nth-child(6)');
  const todoPriority = document.querySelector('input[name="todoPriority"]:checked');
  console.log(todoPriority);


  const newTodo = new Todo();
  newTodo.setTitle(todoTitle.value);
  newTodo.setDescription(todoDescription.value);
  newTodo.setDueDate(todoDueDate.value);
  newTodo.setPriority(todoPriority.value);

  projectArr.forEach(elem => {
    if(elem.selected === 1) {
      elem.listArray.push(newTodo);
    }
  })

  const projectArrJson = JSON.stringify(projectArr);
  localStorage.setItem('projectArrStored', projectArrJson); 

  sortBasedOnPriority();
  renderTodosModule();
  renderProjectsModule();
  renderSidebarModule();
 
}

export default createNewTodo;