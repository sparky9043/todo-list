import './style.css';
import { compareAsc, formatDate, isBefore, isAfter, startOfWeek, addDays } from 'date-fns';

const UpdateUI = (target) => {
  const display = document.querySelector(target);

  const clearDisplay = (target) => {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
  }

  const updateDisplay = (projectsList) => {

    clearDisplay(display);

    const sortedProjectsList = projectsList.sort((a, b) => compareAsc(a.dueDate, b.dueDate));

    for (let i = 0; i < sortedProjectsList.length; i ++) {
      const addedProject = sortedProjectsList[i];

      const article = document.createElement('article');
      const title = document.createElement('h2');
      const cardText = document.createElement('div');
      const description = document.createElement('p');
      const dueDate = document.createElement('p');
      const priority = document.createElement('p');
      const removeBtn = document.createElement('button');
  
      article.classList.add('card');
      article.dataset.id = i;
      title.classList.add('card__title');
      cardText.classList.add('card__text');
      removeBtn.id = 'remove-btn';
  
      title.textContent = addedProject.title;
      description.textContent = `Description: ${addedProject.description}`;
      dueDate.textContent = `Due Date: ${addedProject.dueDate}`;
      priority.textContent = `Priority Level: ${addedProject.priority}`;
      removeBtn.textContent = 'X';

      removeBtn.addEventListener('click', removeCard);

      function removeCard() {
        function removeFromDisplayAndList() {
          this.remove();
          sortedProjectsList.splice(this.dataset.id, 1);
          localStorage.setItem("projects", JSON.stringify(sortedProjectsList));

          console.log(sortedProjectsList);
        }

        function reassignID() {
          const articles = display.querySelectorAll('article');

          for (let i = this.dataset.id; i < articles.length; i++) {
            articles[i].dataset.id = i;
          }
        }

        removeFromDisplayAndList.call(article);
        reassignID.call(article);
      }
  
      const textElements = [
        description,
        dueDate,
        priority,
      ];
  
      for (const element of textElements) {
        cardText.appendChild(element);
      }
      
      article.appendChild(title);
      article.appendChild(cardText);
      article.appendChild(removeBtn);
      display.appendChild(article);
    }
  }

  const showProjectsDueToday = (projectsList) => {
    const todayDate = formatDate(new Date(), 'MMM-dd-yyyy');

    const projectsDueToday = projectsList.filter(project => compareAsc(project.dueDate, todayDate) === 0);

    updateDisplay(projectsDueToday);
    console.log(projectsList);
  }

  const showProjectsDueThisWeek = (projectsList) => {
    const startOfThisWeek = formatDate(addDays(startOfWeek(new Date()), -1), "MMM-dd-yyyy");
    const startOfNextWeek = formatDate(startOfWeek( addDays(new Date(), 7) ), "MMM-dd-yyyy");
    
    const projectsDueThisWeek = projectsList.filter(project => isAfter(project.dueDate, startOfThisWeek) && isBefore(project.dueDate, startOfNextWeek));
    
    updateDisplay(projectsDueThisWeek);
    console.log(projectsList);
  }

  const showAllProjects = (projectsList) => {
    updateDisplay(projectsList);
  }

  return {
    updateDisplay,
    showProjectsDueToday,
    showProjectsDueThisWeek,
    showAllProjects,
  }
}

export default UpdateUI;