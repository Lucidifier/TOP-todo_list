import {projectArr, Project} from './project.js'

function createDefaultProject() {
  const newProject = new Project('Default Project', 'This is a default project');
  projectArr.push(newProject);
}

export default createDefaultProject;
