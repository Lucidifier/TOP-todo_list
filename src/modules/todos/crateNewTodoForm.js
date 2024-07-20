import createNewTodo from "./createNewTodo";

function createNewTodoForm() {
  //clear todo details section
  const todoDetailsSection = document.querySelector('.todos_section_content > div:first-child');
  while (todoDetailsSection.firstChild) {
    todoDetailsSection.removeChild(todoDetailsSection.firstChild);
  };

  const newTodoForm = document.createElement('form');
  const todoTitleLabel = document.createElement('label');
  const todoTitleInput = document.createElement('input');
  const todoDescriptionLabel = document.createElement('label');
  const todoDescriptionInput = document.createElement('input');
  const todoDueDateLabel = document.createElement('label');
  const todoDueDateInput = document.createElement('input');
  const todoPriorityLabel = document.createElement('label');
  const todoPriorityInput = document.createElement('input');
  const todoAddButton = document.createElement('button');

  newTodoForm.setAttribute('class', 'new_todo_form');

  todoTitleLabel.innerText = 'Title: ';
  todoTitleLabel.setAttribute('for', 'todoTitle');
  todoTitleInput.type = 'text';
  todoTitleInput.id = 'todoTitle';
  todoTitleInput.name = 'todoTitle';

  todoDescriptionLabel.innerText = 'Description: ';
  todoDescriptionLabel.setAttribute('for', 'todoDescription');
  todoDescriptionInput.type = 'text';
  todoDescriptionInput.id = 'todoDescription';
  todoDescriptionInput.name = 'todoDescription';

  todoDueDateLabel.innerText = 'Due Date: ';
  todoDueDateLabel.setAttribute('for', 'todoDueDate');
  todoDueDateInput.type = 'text';
  todoDueDateInput.id = 'todoDueDate';
  todoDueDateInput.name = 'todoDueDate';

  todoPriorityLabel.innerText = 'Priority: ';
  todoPriorityLabel.setAttribute('for', 'todoPriority');
  todoPriorityInput.type = 'text';
  todoPriorityInput.id = 'todoPriority';
  todoPriorityInput.name = 'todoPriority';

  todoAddButton.innerText = '+';

  newTodoForm.append(todoTitleLabel, todoTitleInput, todoDescriptionLabel, todoDescriptionInput, 
    todoDueDateLabel, todoDueDateInput, todoPriorityLabel, todoPriorityInput, todoAddButton);

  todoDetailsSection.appendChild(newTodoForm);

  todoAddButton.addEventListener('click', createNewTodo);

  newTodoForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
}

export default createNewTodoForm;