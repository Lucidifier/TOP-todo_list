

function renderTodosList() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const todosList = document.createElement('div');

  todosList.innerText = 'no todos';

  projectsModuleContent.appendChild(todosList);
}

export default renderTodosList;