import { format } from 'date-fns';

class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = format(dueDate, "MMM-dd-yyyy");
    this.priority = priority;
  }
}

export default Project;