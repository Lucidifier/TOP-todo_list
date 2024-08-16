import { projectArr } from "../projects/project";
import Todo from "./todos";

function changeStatusCheckbox() {
  const checkbox = document.querySelector('input[type="checkbox"]')

  for(const elem of projectArr) {
    if(elem.selected === 1) {
      for(const element of elem.listArray) {
        if(element.selected === 1 && elem.listArray.length > 0) {
          Object.setPrototypeOf(element, Todo.prototype);
          if(checkbox.checked) {
            element.setStatus();
            console.log(element);
          } else {
            element.setStatus();
            console.log(element);
          }
        }
      }
    }
  }
  console.log(projectArr);
}

export default changeStatusCheckbox;