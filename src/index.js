import './style.css';
import { compareAsc } from 'date-fns';
import Project from './ProjectClass';

const EnableUI = (function() {
  const dialog = document.querySelector('.dialog');
  const buttons = document.querySelectorAll('.header__nav--list button');
  const modalButtons = document.querySelectorAll('.dialog button');

  const enableModalButtons = (buttons) => {
    buttons.forEach(button => button.addEventListener('click', function(event) {
      event.preventDefault();
      if (button.id.includes('close')) {
        dialog.close();
      } else if (button.id.includes('submit')) {
        const titleInput = document.querySelector('#title');
        const descInput = document.querySelector('#description');
        const dueDateInput = document.querySelector('#due-date');
        const priorityInput = document.querySelector('#priority');
  
        if (!titleInput.value || !descInput.value || !dueDateInput.value) {
          alert("Please fill out all the forms!");
          return;
        } else {
          project.addProjectToList(titleInput.value, descInput.value, dueDateInput.value, priorityInput.value);
          const ui = UpdateUI(project.getProjectsList(), '.display');
          ui.updateDisplay();
          
        }
      }
    }));
  }

  enableModalButtons(modalButtons);

  const enableNavBarButtons = (buttons) => {
    buttons.forEach(button => button.addEventListener('click', handleClick));

    function handleClick(event) {
      const targetID = event.target.id;
  
      if (targetID.includes('add')) {
        dialog.showModal();
      } else if (targetID.includes('today')) {
        console.log('today');
      } else if (targetID.includes('week')) {
        console.log('week');
      }
    }
  }

  enableNavBarButtons(buttons);
  
})();

const ProjectGenerator = () => {
  const projectsList = [];

  const getProjectsList = () => projectsList;
    
    // projectsList.sort((a, b) => compareAsc(a.dueDate, b.dueDate));

  const addProjectToList = (title, description, dueDate, priority) => {
    const project = new Project(title, description, dueDate, priority);
    projectsList.push(project);
    return project;
  }

  const removeProjectFromList = (index) => {
    projectsList.splice(index, 1);
    return projectsList;
  }

  return {
    getProjectsList,
    addProjectToList,
    removeProjectFromList,
  }
}

const UpdateUI = (projectsList, target) => {
  const display = document.querySelector(target);

  const updateDisplay = () => {

    const addedProject = projectsList[projectsList.length - 1];

    const article = document.createElement('article');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');

    title.textContent = addedProject.title;
    description.textContent = addedProject.description;
    dueDate.textContent = addedProject.dueDate;
    priority.textContent = addedProject.priority;

    const elements = [
      title,
      description,
      dueDate,
      priority,
    ];

    for (const element of elements) {
      article.appendChild(element);
    }

    display.appendChild(article);
  }

  return {
    updateDisplay,
  }
}

const project = ProjectGenerator();