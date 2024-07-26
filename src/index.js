import './style.css';
import Project from './ProjectClass';

const generateProject = (title, description, dueDate, priority) => {

  const project = new Project(title, description, dueDate, priority);

  console.log(project);
}

generateProject('hi', 'hello', '2017-12-12', 'high');