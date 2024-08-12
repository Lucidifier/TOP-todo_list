import addNewTodo from "./addNewTodo";
import deleteTodo from "./deleteTodo";
import editTodoForm from "./editTodoForm";

function createEventListeners() {
  const addButton = document.querySelector('.todos_section_content > div:last-child > div:nth-child(2)');
  const deleteButton = document.querySelector('.todos_section_content > div:last-child > div:nth-child(3)');
  const editButton = document.querySelector('.todos_section_content > div:last-child > div:nth-child(1)');

  editButton.addEventListener('click', editTodoForm)
  addButton.addEventListener('click', addNewTodo);
  deleteButton.addEventListener('click', deleteTodo);
}

export default createEventListeners;