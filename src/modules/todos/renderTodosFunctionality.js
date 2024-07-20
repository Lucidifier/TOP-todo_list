function renderTodosFunctionality() {
  const todosModuleContent = document.querySelector('.todos_section_content');
  const todosFunctionality = document.createElement('div');
  const editButton = document.createElement('div');
  const addButton = document.createElement('div');
  const deleteButton = document.createElement('div');

  editButton.innerText = 'Edit Todo';
  todosFunctionality.appendChild(editButton);

  addButton.innerText = 'Add Todo';
  todosFunctionality.appendChild(addButton);

  deleteButton.innerText = 'Delete Todo';
  todosFunctionality.appendChild(deleteButton);

  todosModuleContent.appendChild(todosFunctionality);
}

export default renderTodosFunctionality;