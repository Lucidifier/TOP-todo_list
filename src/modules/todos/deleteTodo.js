import { projectArr } from "../projects/project";
import renderProjectsModule from "../projects/renderProjectsModule";
import renderTodosModule from "./renderTodosModule";
import renderSidebarModule from "../sidebar/renderSidebarModule";

function deleteTodo() {
  //forEach LOOP DOESNT WORK FOR WHATEVER REASON, listArray shows empty array
  for(const elem of projectArr) {
    if(elem.selected === 1) {
      for(const element of elem.listArray) {
        if(element.selected === 1) {
          let elementIndex = elem.listArray.indexOf(element);
          elem.listArray.splice(elementIndex,1);
          const projectArrJson = JSON.stringify(projectArr);
          localStorage.setItem('projectArrStored', projectArrJson); 
        }
      }
    }
  }
  renderProjectsModule();
  renderTodosModule();
  renderSidebarModule();
}

export default deleteTodo;