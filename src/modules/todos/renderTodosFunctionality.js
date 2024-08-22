function renderTodosFunctionality() {
  const todosModuleContent = document.querySelector('.todos_section_content');
  const todosFunctionality = document.createElement('div');
  const editButton = document.createElement('div');
  const addButton = document.createElement('div');
  const deleteButton = document.createElement('div');

  editButton.innerText = 'EDIT';
  todosFunctionality.appendChild(editButton);

  addButton.innerText = 'ADD';
  todosFunctionality.appendChild(addButton);

  deleteButton.innerText = 'DELETE';
  todosFunctionality.appendChild(deleteButton);

  todosModuleContent.appendChild(todosFunctionality);
}

export default renderTodosFunctionality;