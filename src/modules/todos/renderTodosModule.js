import renderTodoDetails from "./renderTodoDetails";
import renderTodosFunctionality from "./renderTodosFunctionality";
import createEventListeners from "./eventListeners";
import renderEmptyTodoDetails from "./renderEmptyTodoDetails";

function renderTodosModule() {
  const todosModuleContent = document.querySelector('.todos_section_content');
  while (todosModuleContent.firstChild) {
    todosModuleContent.removeChild(todosModuleContent.firstChild);
  };

  renderEmptyTodoDetails();
  renderTodosFunctionality();
  createEventListeners();
}

export default renderTodosModule;