import { projectArr } from "../projects/project";
import Todo from "./todos";
import renderProjectsModule from "../projects/renderProjectsModule";
import renderTodosModule from "./renderTodosModule";
import renderSidebarModule from "../sidebar/renderSidebarModule";
import sortBasedOnPriority from "./sortTodoArray";
 

function editTodo() {
  const todo = Todo;
  const todoTitle = document.querySelector('#todoTitle');
  const todoDescription = document.querySelector('#todoDescription');
  const todoDueDate = document.querySelector('#todoDueDate');
  const todoPriority = document.querySelector('input[name="todoPriority"]:checked');

  for(const elem of projectArr) {
    if(elem.selected === 1) {
      for(const element of elem.listArray) {
        Object.setPrototypeOf(element, todo.prototype);
        if(element.selected === 1) {

          element.setTitle(todoTitle.value);
          element.setDescription(todoDescription.value);
          element.setDueDate(todoDueDate.value);
          element.setPriority(todoPriority.value);
          console.log(element);
          const projectArrJson = JSON.stringify(projectArr);
          localStorage.setItem('projectArrStored', projectArrJson);
        }
      }
    }
  }
  sortBasedOnPriority();
  renderProjectsModule();
  renderTodosModule();
  renderSidebarModule();
}

export default editTodo;