function renderEmptyTodoDetails() {
  const todosModuleContent = document.querySelector('.todos_section_content');
  const todoDetails = document.createElement('div');
  todoDetails.innerText = 'no todo selected';
  todosModuleContent.appendChild(todoDetails);
}

export default renderEmptyTodoDetails;