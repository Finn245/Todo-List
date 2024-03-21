import menu from './images/menu.png';

import {projects} from './creatingprojects.js'; // Importing the projects array

// Function to create a project element and render it
export function createProject(project) {
	const projectDiv = document.createElement('div');
	projectDiv.innerHTML = `
    <div class="project">
        <img src="${menu}" alt="Menu Icon">
        <div>${project.name}</div>
    </div>
    `;

	// Get the container element
	const container = document.querySelector('.container');

	// Append the project element to the container
	container.appendChild(projectDiv);
}

// Function to initialize projects
export function initializeProjects() {
	projects.forEach((project) => {
		createProject(project);
	});
}

// Function to handle form submission
export function handleFormSubmit(e) {
	e.preventDefault();

	console.log('g');

	const inputField = document.getElementById('todo-input');
	const projectName = inputField.value.trim(); // Get the value from the input field

	const newProject = {
		name: projectName,
		tasks: [],
	};

	projects.push(newProject); // Add the new project to the projects array

	createProject(newProject);

	// Clear the input field after adding the project
	inputField.value = '';
}

// Function to initialize event listeners
export function initializeEventListeners() {
	const form = document.querySelector('#lists');
	form.addEventListener('submit', handleFormSubmit);
}
