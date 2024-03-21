import"./styles/reset.css";
import"./styles/style.css";
import { createProject, initializeProjects,initializeEventListeners } from "./dommanipulation.js";
import { createTask } from "./creatingtodos.js";
import { projects } from "./creatingprojects.js"; // Importing the projects array

initializeProjects();
initializeEventListeners();
console.log(projects);

const todo1= createTask("house cleaning","put jacket and bed","06/07/2022","low","bed iswet","unchecked");
const todo2= createTask("garage cleaning","put car and door","06/07/2021","low","gargae iswet","checked");
console.log(todo1);
console.log(todo2);

