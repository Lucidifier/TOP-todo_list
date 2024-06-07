function renderTodosList() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const todosList = document.createElement('div');
  todosList.innerText = 'No task present';
  projectsModuleContent.appendChild(todosList);
  return todosList;
}

export default renderTodosList;