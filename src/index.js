import './style.css';
import Project from './ProjectClass';
import UpdateUI from './UpdateUI';

/* 
  For 7/27/2024
  1. Create sidebar in HTML and appropriate buttons. The buttons should be:
    a. Today
    b. This Week
    c. All
  2. Create script files for all three
  3. Make sure the three buttons take projectsList = [] as an argument so that it can iterate the sorted versions of it.
  4. Maybe consider importing UpdateUI function, which takes the target parent as display and based on that,
    const ui = UpdateUI('.display');
    ui.updateDisplay(projectsList);
    ==> Now all you have to do is sort the projectsList according to dates
  5. Use date-fns to create conditions when filtering projectsList
*/

const projectsList = [];

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
          const ui = UpdateUI('.display');
          ui.updateDisplay(projectsList);
          
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
        const ui = UpdateUI('.display');
        ui.showProjectsDueToday(projectsList);
      } else if (targetID.includes('week')) {
        console.log('week');
      }
    }
  }

  enableNavBarButtons(buttons);
  
})();

const ProjectGenerator = () => {

  const getProjectsList = () => projectsList;
    
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

const project = ProjectGenerator();