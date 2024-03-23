import "./styles/reset.css";
import "./styles/style.css";
import { initializeProjects, initializeEventListeners, renderProject } from "./dommanipulation.js";
import { projects } from "./creatingprojects.js"; // Importing the projects array
import greeting from "./images/greeting.svg";
import ques from './images/ques.svg';

const main = document.querySelector(".todo-main");
main.innerHTML = `<div class="faq"><img src="${greeting}" alt=""></div>
<div class='text'>Greeting! This my todolist application please choose any available projects or create new one so you can add your tasks. </div>
`;

renderProject();
initializeProjects();
initializeEventListeners();

import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage";

// Load projects from localStorage
const loadedProjects = loadFromLocalStorage();

// Check if there are projects loaded from localStorage
if (loadedProjects.length > 0) {
    // Replace projects array with loaded projects
    projects.splice(0, projects.length, ...loadedProjects);
}

console.log(projects);
