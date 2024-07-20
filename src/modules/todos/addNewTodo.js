import { projectArr } from "../projects/project";
import createNewTodoForm from "./crateNewTodoForm";

function createNewTodo() {
  projectArr.forEach(elem => {
    if (elem.selected === 1) {
      createNewTodoForm();
    } else {
      console.log('ERROR');
    }
  })
}

export default createNewTodo;