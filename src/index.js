import './style.css';
import './modules/projects/projectModuleStyle.css';
import {projectArr} from './modules/projects/project.js';
import createDefaultProject from './modules/projects/createProject.js';
import renderProjectsModule from './modules/projects/renderProjectsModule.js';
import addEventListeners from './modules/projects/eventListeners.js';

createDefaultProject();
renderProjectsModule();
addEventListeners();
console.log(projectArr);
