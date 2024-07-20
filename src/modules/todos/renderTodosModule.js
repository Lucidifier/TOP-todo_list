import renderTodoDetails from "./renderTodoDetails";
import renderTodosFunctionality from "./renderTodosFunctionality";

function renderTodosModule() {
  const todosModuleContent = document.querySelector('.todos_section_content');
  while (todosModuleContent.firstChild) {
    todosModuleContent.removeChild(todosModuleContent.firstChild);
  };

  renderTodoDetails();
  renderTodosFunctionality();
}

export default renderTodosModule;