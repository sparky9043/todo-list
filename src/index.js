import './style.css';
import Project from './ProjectClass';

const ProjectGenerator = () => {
  const projectsList = [];

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

const myProject = ProjectGenerator();

myProject.addProjectToList('hi1', 'hello', '2017-09-15', 'low');
myProject.addProjectToList('hi2', 'hello', '2017-09-15', 'low');
myProject.addProjectToList('hi3', 'hello', '2017-09-15', 'low');

myProject.removeProjectFromList(1);

console.log(myProject.getProjectsList());
