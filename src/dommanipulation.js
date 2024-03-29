import menu from './images/menu.png';
import { projects } from './creatingprojects.js'; // Importing the projects array
import { showmodal } from './tasks.js';
import ques from './images/ques.svg';
import { renderTasks } from './tasks.js';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage.js'; // Importing the saveToLocalStorage function
import { addProjectListeners } from './tasks.js';
// Function to create a project element and render it
export function createProject(project) {
  const projectDiv = document.createElement('div');
  projectDiv.innerHTML = `
        <div class="project">
            <img src="${menu}" alt="Menu Icon">
            <div class="projectName">${project.name}</div>
        </div>
    `;

  // Get the container element
  const container = document.querySelector('.container');

  // Append the project element to the container
  container.appendChild(projectDiv);
}

// Function to initialize projects
export function initializeProjects() {
  // Load projects from localStorage
  const storedProjects = loadFromLocalStorage();
  if (storedProjects && storedProjects.length > 0) {
    storedProjects.forEach((project) => {
      projects.push(project);
      createProject(project);
    });
  }

  // Attach click event listener to each project element
  const projectElements = document.querySelectorAll('.project');
  projectElements.forEach((projectElement) => {
    projectElement.addEventListener('click', () => {
      render(projectElement.textContent);
    });
  });
}
// Function to handle form submission
export function handleFormSubmit(e) {
  e.preventDefault();

  const inputField = document.getElementById('todo-input');
  const projectName = inputField.value.trim(); // Get the value from the input field
  if (!exist(projectName, projects)) {
    const newProject = {
      name: projectName,
      tasks: [],
    };

    projects.push(newProject); // Add the new project to the projects array
    saveToLocalStorage(projects);
    createProject(newProject);

    // Clear the input field after adding the project
    inputField.value = '';
  } else {
    // Show error message if project already exists
    showError('Project already exists');
  }
}

// Function to check if a project with a given name already exists in the projects array
function exist(projectName, projects) {
  return projects.some((project) => project.name === projectName);
}

// Function to initialize event listeners
export function initializeEventListeners() {
  const form = document.querySelector('#lists');
  const inputField = document.getElementById('todo-input');

  // Add event listener for form submission
  form.addEventListener('submit', handleFormSubmit);

  // Add event listener for input field value change
  inputField.addEventListener('input', clearErrorMessage);
}

// Function to clear error message when input field value changes
function clearErrorMessage() {
  const errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove(); // Remove the error message if it exists
  }
}

// Function to show error message
function showError(message) {
  // Remove existing error message if it exists
  clearErrorMessage();

  // Create error message element
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';

  // Append error message to the form
  const form = document.querySelector('#lists');
  form.appendChild(errorMessage);
}

// Function to render project details
function render(projectName) {
  const main = document.querySelector('.todo-main');
  main.innerHTML = `<h1>${projectName}</h1>
    <div><button type="button" class="todo-btn task-btn" id="task-btn">Add new task &plus;</button></div>
    <div class ="task-content">
    <div class="faq"><img src="${ques}" alt=""></div>
    <div class='text'>There are no active tasks in this project or newly created? You can add some. </div></div>
    `;

  renderTasks(projectName);
}

// Function to render projects into the main section once they are clicked

export function renderProject() {
  const container = document.querySelector('.container');

  container.addEventListener('click', (event) => {
    const projectElement = event.target.closest('.project');
    if (projectElement) {
      const projectName =
        projectElement.querySelector('.projectName').textContent;
      render(projectName);
      showmodal(); // Call showmodal() here
    }
  });
}

addProjectListeners();
