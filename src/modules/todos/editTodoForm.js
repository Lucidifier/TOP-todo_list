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
        
          //priority selection
          const todoPriorityFieldset = document.createElement('fieldset');
          const todoPriorityLegend = document.createElement('legend');
          const todoPriorityHighLabel = document.createElement('label');
          const todoPriorityHighInput = document.createElement('input');
          const todoPriorityMediumLabel = document.createElement('label');
          const todoPriorityMediumInput = document.createElement('input');
          const todoPriorityLowLabel = document.createElement('label');
          const todoPriorityLowInput = document.createElement('input');
        
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
          todoDueDateInput.type = 'date';
          todoDueDateInput.id = 'todoDueDate';
          todoDueDateInput.name = 'todoDueDate';
          todoDueDateInput.value = element.dueDate;

          todoPriorityLegend.innerText = 'Select task priority'

  todoPriorityHighLabel.innerText = 'High';
  todoPriorityHighLabel.setAttribute('for', 'todoHighPriority');
  todoPriorityHighInput.type = 'radio';
  todoPriorityHighInput.id = 'todoHighPriority';
  todoPriorityHighInput.name = 'todoPriority';
  todoPriorityHighInput.value = 'High';

  todoPriorityMediumLabel.innerText = 'Medium';
  todoPriorityMediumLabel.setAttribute('for', 'todoMediumPriority');
  todoPriorityMediumInput.type = 'radio';
  todoPriorityMediumInput.id = 'todoMediumPriority';
  todoPriorityMediumInput.name = 'todoPriority';
  todoPriorityMediumInput.value = 'Medium';

  todoPriorityLowLabel.innerText = 'Low';
  todoPriorityLowLabel.setAttribute('for', 'todoLowPriority');
  todoPriorityLowInput.type = 'radio';
  todoPriorityLowInput.id = 'todoLowPriority';
  todoPriorityLowInput.name = 'todoPriority';
  todoPriorityLowInput.value = 'Low';
        
          todoAddButton.innerText = '+';

          todoPriorityFieldset.append(todoPriorityLegend, todoPriorityHighInput, todoPriorityHighLabel, todoPriorityMediumInput, todoPriorityMediumLabel,
            todoPriorityLowInput, todoPriorityLowLabel);
        
          newTodoForm.append(todoTitleLabel, todoTitleInput, todoDescriptionLabel, todoDescriptionInput, 
            todoDueDateLabel, todoDueDateInput, todoPriorityFieldset, todoAddButton);
        
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
