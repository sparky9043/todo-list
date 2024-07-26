import './style.css';
import Project from './ProjectClass';

const ProjectGenerator = () => {
  const projectsList = [];

  const getProjectsArray = () => projectsList;

  const makeProject = (title, description, dueDate, priority) => {
    const project = new Project(title, description, dueDate, priority);
    projectsList.push(project);
    return project;
  }

  return {
    getProjectsArray,
    makeProject,
  }
}

const myProject = ProjectGenerator();
