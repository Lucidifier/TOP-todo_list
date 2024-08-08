import {projectArr, Project} from './project.js'

function createDefaultProject() {
  if(localStorage.length === 0 || localStorage[0] === 0) {
    const newProject = new Project('Default Project', 'This is a default project');
    projectArr.push(newProject);

    const projectArrJson = JSON.stringify(projectArr);
    localStorage.setItem('projectArrStored', projectArrJson); 
    console.log('START');
  } else { console.log('NOT START')}
}

export default createDefaultProject;
