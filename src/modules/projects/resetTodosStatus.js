import { projectArr } from "./project";

function resetTodosStatus() {
  const todosList = document.querySelectorAll('.projects_section_content > div:nth-child(1) > div');
  todosList.forEach(node => {
    node.removeAttribute('class');
  })
  projectArr.forEach(elem => {
    elem.listArray.forEach(element => {
      element.selected = 0;
    })
  })
}

export default resetTodosStatus;