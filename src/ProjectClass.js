import { formatDate } from 'date-fns';

class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = formatDate(dueDate, "MMM-dd-yyyy");
    this.priority = priority;
  }
}

export default Project;