import { projectArr } from "../projects/project";
import Todo from "./todos";
import renderSidebarModule from "../sidebar/renderSidebarModule.js";
import renderCurrentProject from "../projects/renderCurrentProject.js";

function changeStatusCheckbox() {
  const checkbox = document.querySelector('.todos_section_content > div > div > input')

  for(const elem of projectArr) {
    if(elem.selected === 1) {
      for(const element of elem.listArray) {
        if(element.selected === 1 && elem.listArray.length > 0) {
          Object.setPrototypeOf(element, Todo.prototype);
          if(checkbox.checked) {
            element.setStatus();

            const projectArrJson = JSON.stringify(projectArr);
            localStorage.setItem('projectArrStored', projectArrJson);
            const projectArrJsonString = localStorage.getItem('projectArrStored');
            const projectArrParsed = JSON.parse(projectArrJsonString);
            projectArr.splice(0, projectArr.length);
            projectArr.push(...projectArrParsed);

            renderSidebarModule();
          } else {
            element.setStatus();
            const projectArrJson = JSON.stringify(projectArr);
            localStorage.setItem('projectArrStored', projectArrJson);
            const projectArrJsonString = localStorage.getItem('projectArrStored');
            const projectArrParsed = JSON.parse(projectArrJsonString);
            projectArr.splice(0, projectArr.length);
            projectArr.push(...projectArrParsed);

            renderSidebarModule();
          }
        }
      }
    }
  }
}

export default changeStatusCheckbox;