import { projectArr } from "../projects/project";
import createNewTodoForm from "./crateNewTodoForm";

function addNewTodo() {
  console.log('addNewTodo');
  console.log(projectArr);
  projectArr.forEach(elem => {
    if (elem.selected === 1) {
      createNewTodoForm();
    } else {
      console.log('ERROR');
    }
  })
}

export default addNewTodo;