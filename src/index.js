import './style.css';
import './modules/projects/projectModuleStyle.css';
import './modules/todos/todosModuleStyle.css';
import './modules/sidebar/sidebarStyle.css';
import {projectArr} from './modules/projects/project.js';
import createDefaultProject from './modules/projects/createDefaultProject.js';
import renderProjectsModule from './modules/projects/renderProjectsModule.js';
import addEventListeners from './modules/projects/eventListeners.js';
import renderTodosModule from './modules/todos/renderTodosModule.js';
import renderSidebarModule from './modules/sidebar/renderSidebarModule.js';

renderProjectsModule();
renderTodosModule();
renderSidebarModule();
// addEventListeners();