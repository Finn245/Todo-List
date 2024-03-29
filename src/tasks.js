import { projects } from './creatingprojects.js';
import { createTask } from './creatingtodos.js';
import { saveToLocalStorage } from './localStorage';

// Function to close the modal
function closeModal() {
  const modal = document.querySelector('.modal');
  modal.close(); // Close the modal
}

export function showmodal() {
  const addTask = document.querySelector('.task-btn');

  addTask.addEventListener('click', () => {
    const modal = document.querySelector('.modal');

    // Reset the form fields before showing the modal
    const taskForm = document.querySelector('#task-form');
    taskForm.reset();

    modal.show(); // Show the modal

    // Add event listener to form submission
    taskForm.addEventListener('submit', handleFormSubmit);
  });

  // Add event listener to close button
  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', closeModal);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the index of the project
  const projectName = document.querySelector('.todo-main h1').textContent;
  const currentProjectIndex = projects.findIndex(
    (project) => project.name === projectName
  );

  // Extract form data
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const description = formData.get('description');
  const dueDate = formData.get('dueDate');
  const priority = formData.get('priority');
  const notes = formData.get('notes');

  // Create task object
  const newTask = createTask(title, description, dueDate, priority, notes);
  // Add the task to the corresponding project
  projects[currentProjectIndex].tasks.push(newTask);
  saveToLocalStorage(projects);
  renderTasks(projectName); // Render tasks for the current project

  // Close the modal
  closeModal();
}

// Function to render tasks for a specific project
export function renderTasks(projectName) {
  const main = document.querySelector('.todo-main');

  // Find the project object in the projects array
  const currentProject = projects.find(
    (project) => project.name === projectName
  );

  // Check if the current project and its tasks exist
  if (
    currentProject &&
    currentProject.tasks &&
    currentProject.tasks.length > 0
  ) {
    const taskContent = main.querySelector('.task-content');

    // Clear the task content
    taskContent.innerHTML = '';

    // Create HTML elements for each task and append them to taskContent
    currentProject.tasks.forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item'); // Add class to task item
      taskItem.innerHTML = `
                <div class='title'>${task.title}</div>
                <div class='description'>${task.description}</div>
                <div class='due-date'>${task.dueDate}</div>
                <div class='priority'> Priority: ${task.priority}</div>
                <button class='delete-task-btn'>Delete</button> <!-- Add delete button -->
            `;
      taskContent.appendChild(taskItem);

      // Add event listener to delete button
      const deleteButton = taskItem.querySelector('.delete-task-btn');
      deleteButton.addEventListener('click', () => {
        deleteTask(projectName, task); // Call function to delete task
      });
    });
  }
}

// Function to delete a task from a project
function deleteTask(projectName, taskToDelete) {
  const currentProject = projects.find(
    (project) => project.name === projectName
  );

  if (
    currentProject &&
    currentProject.tasks &&
    currentProject.tasks.length > 0
  ) {
    // Find index of task to delete
    const taskIndex = currentProject.tasks.findIndex(
      (task) => task === taskToDelete
    );

    if (taskIndex !== -1) {
      // Remove task from tasks array
      currentProject.tasks.splice(taskIndex, 1);
      saveToLocalStorage(projects);

      // If there are no more tasks, clear the task content
      if (currentProject.tasks.length === 0) {
        const taskContent = document.querySelector('.task-content');
        taskContent.innerHTML = '';
      } else {
        // Re-render tasks for the current project
        renderTasks(projectName);
      }
    }
  }
}

// Function to add event listeners to each project
export function addProjectListeners() {
  const container = document.querySelector('.container');

  container.addEventListener('click', (event) => {
    const projectElement = event.target.closest('.project');

    if (projectElement) {
      const projectName =
        projectElement.querySelector('.projectName').textContent;

      // Render tasks for the clicked project
      renderTasks(projectName);
    }
  });
}
