import './style.css';
import './modules/projects/projectModuleStyle.css';
import {projectArr} from './modules/projects/project.js';
import createDefaultProject from './modules/projects/createDefaultProject.js';
import renderProjectsModule from './modules/projects/renderProjectsModule.js';
import addEventListeners from './modules/projects/eventListeners.js';

localStorage.clear();
createDefaultProject();
renderProjectsModule();
addEventListeners();