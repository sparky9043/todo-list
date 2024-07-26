import './style.css';
import { compareAsc } from 'date-fns';
import Project from './ProjectClass';

const EnableUI = (function() {
  const dialog = document.querySelector('.dialog');
  const buttons = document.querySelectorAll('.header__nav--list button');
  const modalButtons = document.querySelectorAll('.dialog button');
  modalButtons.forEach(button => button.addEventListener('click', function(event) {
    event.preventDefault();
    if (button.id.includes('close')) {
      dialog.close();
    } else if (button.id.includes('submit')) {
      return;
    }
  }));
  
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
})();

const ProjectGenerator = () => {
  const projectsList = [];

  const getProjectsList = () => projectsList.sort((a, b) => compareAsc(a.dueDate, b.dueDate));

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