import { projectArr } from "../projects/project";

function sortBasedOnPriority() {
  for(const elem of projectArr) {
      elem.listArray.sort(function(x,y) {
        if(x.priority < y.priority) {
          return 1;
        }
        if (x.priority > y.priority) {
          return -1;
        }
        return 0;
      })
    }
    const projectArrJson = JSON.stringify(projectArr);
    localStorage.setItem('projectArrStored', projectArrJson);
}

export default sortBasedOnPriority;