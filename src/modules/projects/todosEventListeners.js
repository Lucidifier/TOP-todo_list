import { projectArr } from "./project";
import resetTodosStatus from "./resetTodosStatus";
import renderTodoDetails from "../todos/renderTodoDetails";

//ADD EVENT LISTENERS TO EACH TODO IN TODOS LIST
function addTodosEventListeners() {
  const todosList = document.querySelectorAll('.projects_section_content > div:nth-child(1) > div');
  todosList.forEach(node => {
    node.addEventListener('click', function() {
      console.log('nodez');
      resetTodosStatus();
      let dataValue = this.dataset.id;
      console.log(dataValue);
      node.setAttribute('class', 'project_selected');
      console.log(projectArr);
      projectArr.forEach(elem => {
        if(elem.selected === 1) {
        elem.listArray[dataValue].selected = 1;
        console.log('selection activated!'); 
        console.log(elem.listArray);
        renderTodoDetails();
        } else { console.log('errorito!'); }
      })
    })
  })
  console.log('CHECK ARRAY AFTER CREATING NEW TODO', projectArr);
}

export default addTodosEventListeners;
