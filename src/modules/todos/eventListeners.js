import addNewTodo from "./addNewTodo";
import deleteTodo from "./deleteTodo";

function createEventListeners() {
  const addButton = document.querySelector('.todos_section_content > div:last-child > div:nth-child(2)');
  const deleteButton = document.querySelector('.todos_section_content > div:last-child > div:nth-child(3)');

  addButton.addEventListener('click', addNewTodo);
  deleteButton.addEventListener('click', deleteTodo);
}

export default createEventListeners;