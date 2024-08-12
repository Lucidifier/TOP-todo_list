import { projectArr } from "../projects/project";
import createNewTodo from "./createNewTodo";
import editTodo from "./editTodo";

function editTodoForm() {
  //forEach LOOP DOESNT WORK FOR WHATEVER REASON, listArray shows empty array
  for(const elem of projectArr) {
    if(elem.selected === 1) {
      for(const element of elem.listArray) {
        if(element.selected === 1) {

          const todoDetailsSection = document.querySelector('.todos_section_content');

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
          todoTitleInput.value = element.title;
        
          todoDescriptionLabel.innerText = 'Description: ';
          todoDescriptionLabel.setAttribute('for', 'todoDescription');
          todoDescriptionInput.type = 'text';
          todoDescriptionInput.id = 'todoDescription';
          todoDescriptionInput.name = 'todoDescription';
          todoDescriptionInput.value = element.description;
        
          todoDueDateLabel.innerText = 'Due Date: ';
          todoDueDateLabel.setAttribute('for', 'todoDueDate');
          todoDueDateInput.type = 'text';
          todoDueDateInput.id = 'todoDueDate';
          todoDueDateInput.name = 'todoDueDate';
          todoDueDateInput.value = element.dueDate;
        
          todoPriorityLabel.innerText = 'Priority: ';
          todoPriorityLabel.setAttribute('for', 'todoPriority');
          todoPriorityInput.type = 'text';
          todoPriorityInput.id = 'todoPriority';
          todoPriorityInput.name = 'todoPriority';
          todoPriorityInput.value = element.priority;
        
          todoAddButton.innerText = '+';
        
          newTodoForm.append(todoTitleLabel, todoTitleInput, todoDescriptionLabel, todoDescriptionInput, 
            todoDueDateLabel, todoDueDateInput, todoPriorityLabel, todoPriorityInput, todoAddButton);
        
          todoDetailsSection.appendChild(newTodoForm);
        
          todoAddButton.addEventListener('click', editTodo);
        
          newTodoForm.addEventListener('submit', function(event) {
            event.preventDefault();
          });
        } 
        }
        
      }
    }
}

export default editTodoForm;
