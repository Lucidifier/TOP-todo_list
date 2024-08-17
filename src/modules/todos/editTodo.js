import { projectArr } from "../projects/project";
import Todo from "./todos";
import renderProjectsModule from "../projects/renderProjectsModule";
import renderTodosModule from "./renderTodosModule";
import renderSidebarModule from "../sidebar/renderSidebarModule";
import sortBasedOnPriority from "./sortTodoArray";
 

function editTodo() {
  const todo = Todo;
  const todoTitle = document.querySelector('.new_todo_form > input:nth-child(2)');
  const todoDescription = document.querySelector('.new_todo_form > input:nth-child(4)');
  const todoDueDate = document.querySelector('.new_todo_form > input:nth-child(6)');
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