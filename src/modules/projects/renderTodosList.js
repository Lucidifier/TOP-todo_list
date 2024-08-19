

function renderTodosList() {
  const projectsModuleContent = document.querySelector('.projects_section_content');
  const todosList = document.createElement('div');
  const todosListEmpty1 = document.createElement('p');

  todosListEmpty1.innerText = 'Folder empty';
  todosList.appendChild(todosListEmpty1);
  todosList.classList.add('new_created_project', 'empty_todo_list');

  projectsModuleContent.appendChild(todosList);
}

export default renderTodosList;