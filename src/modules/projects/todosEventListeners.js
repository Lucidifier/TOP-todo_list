import { projectArr } from "./project";
import resetTodosStatus from "./resetTodosStatus";
import renderTodoDetails from "../todos/renderTodoDetails";

//ADD EVENT LISTENERS TO EACH TODO IN TODOS LIST
function addTodosEventListeners() {
  const todosList = document.querySelectorAll('.projects_section_content > div:nth-child(1) > div');
  todosList.forEach(node => {
    node.addEventListener('click', function() {
      resetTodosStatus();
      let dataValue = this.dataset.id;
      node.classList.add('project_selected', 'new_created_project');
      projectArr.forEach(elem => {
        if(elem.selected === 1) {
        elem.listArray[dataValue].selected = 1;
        renderTodoDetails();
        }
      })
    })
  })
}

export default addTodosEventListeners;
