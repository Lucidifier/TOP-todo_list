import './style.css';
import {projectArr} from './modules/projects/project.js';
import createNewProject from './modules/projects/createProject.js';
import renderProjectsModule from './modules/projects/renderProjects.js';

createNewProject();
renderProjectsModule();
console.log(projectArr);
