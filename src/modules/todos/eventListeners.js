import addNewTodo from "./addNewTodo";

function createEventListeners() {
  const addButton = document.querySelector('.todos_section_content > div:last-child > div:nth-child(2)');
  addButton.addEventListener('click', addNewTodo);
}

export default createEventListeners;