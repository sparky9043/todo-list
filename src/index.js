import './style.css';
import { compareAsc } from 'date-fns';
import Project from './ProjectClass';

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

project.addProjectToList('Hi0', 'Hello0', '2020-12-17', 'low');
project.addProjectToList('Hi1', 'Hello1', '2015-12-17', 'medium');
project.addProjectToList('Hi2', 'Hello2', '2024-12-17', 'high');
project.addProjectToList('Hi3', 'Hello3', '2018-12-17', 'low');
project.addProjectToList('Hi4', 'Hello4', '2011-12-17', 'low');


console.log(project.getProjectsList());