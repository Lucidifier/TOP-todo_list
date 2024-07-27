function renderTodoDetails() {
  const todosModuleContent = document.querySelector('.todos_section_content');

  while(todosModuleContent.firstChild) {
    todosModuleContent.removeChild(todosModuleContent.firstChild);
  }

  const todoDetails = document.createElement('div');
  todoDetails.innerText = 'no todo selected';
  todosModuleContent.appendChild(todoDetails);
}

export default renderTodoDetails;