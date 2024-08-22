function renderEmptyTodoDetails() {
  const todosModuleContent = document.querySelector('.todos_section_content');
  const todoDetails = document.createElement('div');
  const todoDetailsMessage1 = document.createElement('p');
  const todoDetailsMessage2 = document.createElement('p');
  todoDetailsMessage1.innerText = 'No task selected';
  todoDetailsMessage2.innerText = 'Click below to select a task';
  todoDetails.append(todoDetailsMessage1, todoDetailsMessage2);
  todosModuleContent.appendChild(todoDetails);
}

export default renderEmptyTodoDetails;