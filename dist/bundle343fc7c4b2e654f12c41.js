/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creatingprojects.js":
/*!*********************************!*\
  !*** ./src/creatingprojects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
// Array to store projects
var projects = [{
  name: 'Default Project',
  tasks: []
}];


/*saveToLocalStorage(projects)
loadFromLocalStorage();*/

/***/ }),

/***/ "./src/creatingtodos.js":
/*!******************************!*\
  !*** ./src/creatingtodos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
// Function to create a task object
function createTask(title, description, dueDate, priority, notes, checklist) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    notes: notes
  };
}

/***/ }),

/***/ "./src/dommanipulation.js":
/*!********************************!*\
  !*** ./src/dommanipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit),
/* harmony export */   initializeEventListeners: () => (/* binding */ initializeEventListeners),
/* harmony export */   initializeProjects: () => (/* binding */ initializeProjects),
/* harmony export */   renderProject: () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _creatingprojects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatingprojects.js */ "./src/creatingprojects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _images_ques_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ques.svg */ "./src/images/ques.svg");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");

 // Importing the projects array



 // Importing the saveToLocalStorage function


// Function to create a project element and render it
function createProject(project) {
  var projectDiv = document.createElement('div');
  projectDiv.innerHTML = "\n        <div class=\"project\">\n            <img src=\"".concat(_images_menu_png__WEBPACK_IMPORTED_MODULE_0__, "\" alt=\"Menu Icon\">\n            <div class=\"projectName\">").concat(project.name, "</div>\n        </div>\n    ");

  // Get the container element
  var container = document.querySelector('.container');

  // Append the project element to the container
  container.appendChild(projectDiv);
}

// Function to initialize projects
function initializeProjects() {
  // Load projects from localStorage
  var storedProjects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_4__.loadFromLocalStorage)();
  if (storedProjects && storedProjects.length > 0) {
    storedProjects.forEach(function (project) {
      _creatingprojects_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(project);
      createProject(project);
    });
  }

  // Attach click event listener to each project element
  var projectElements = document.querySelectorAll('.project');
  projectElements.forEach(function (projectElement) {
    projectElement.addEventListener('click', function () {
      render(projectElement.textContent);
    });
  });
}
// Function to handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  var inputField = document.getElementById('todo-input');
  var projectName = inputField.value.trim(); // Get the value from the input field
  if (!exist(projectName, _creatingprojects_js__WEBPACK_IMPORTED_MODULE_1__.projects)) {
    var newProject = {
      name: projectName,
      tasks: []
    };
    _creatingprojects_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(newProject); // Add the new project to the projects array
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)(_creatingprojects_js__WEBPACK_IMPORTED_MODULE_1__.projects);
    createProject(newProject);

    // Clear the input field after adding the project
    inputField.value = '';
  } else {
    // Show error message if project already exists
    showError("Project already exists");
  }
}

// Function to check if a project with a given name already exists in the projects array
function exist(projectName, projects) {
  return projects.some(function (project) {
    return project.name === projectName;
  });
}

// Function to initialize event listeners
function initializeEventListeners() {
  var form = document.querySelector('#lists');
  var inputField = document.getElementById('todo-input');

  // Add event listener for form submission
  form.addEventListener('submit', handleFormSubmit);

  // Add event listener for input field value change
  inputField.addEventListener('input', clearErrorMessage);
}

// Function to clear error message when input field value changes
function clearErrorMessage() {
  var errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove(); // Remove the error message if it exists
  }
}

// Function to show error message
function showError(message) {
  // Remove existing error message if it exists
  clearErrorMessage();

  // Create error message element
  var errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';

  // Append error message to the form
  var form = document.querySelector('#lists');
  form.appendChild(errorMessage);
}

// Function to render project details
function render(projectName) {
  var main = document.querySelector('.todo-main');
  main.innerHTML = "<h1>".concat(projectName, "</h1>\n    <div><button type=\"button\" class=\"todo-btn task-btn\" id=\"task-btn\">Add new task &plus;</button></div>\n    <div class =\"task-content\">\n    <div class=\"faq\"><img src=\"").concat(_images_ques_svg__WEBPACK_IMPORTED_MODULE_3__, "\" alt=\"\"></div>\n    <div class='text'>There are no active tasks in this project or newly created? You can add some. </div></div>\n    ");
  (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(projectName);
}

// Function to render projects into the main section once they are clicked

function renderProject() {
  var container = document.querySelector('.container');
  container.addEventListener('click', function (event) {
    var projectElement = event.target.closest('.project');
    if (projectElement) {
      var projectName = projectElement.querySelector('.projectName').textContent;
      render(projectName);
      (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.showmodal)(); // Call showmodal() here
    }
  });
}
(0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.addProjectListeners)();

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
console.log('gg');
// Function to save projects and todos to localStorage
function saveToLocalStorage(projects) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    console.error("LocalStorage is not supported by your browser!");
  }
}

// Function to load projects and todos from localStorage
function loadFromLocalStorage() {
  if (typeof Storage !== "undefined") {
    var storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      var loadedProjects = JSON.parse(storedProjects);

      // Check if the default project already exists in the loaded projects
      var defaultProjectIndex = loadedProjects.findIndex(function (project) {
        return project.name === 'Default Project';
      });

      // If the default project doesn't exist, add it to the loaded projects
      if (defaultProjectIndex === -1) {
        loadedProjects.push({
          name: 'Default Project',
          tasks: []
        });
      }
      return loadedProjects;
    } else {
      console.log("No data found in localStorage.");
      return [];
    }
  } else {
    console.error("LocalStorage is not supported by your browser!");
    return [];
  }
}

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectListeners: () => (/* binding */ addProjectListeners),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks),
/* harmony export */   showmodal: () => (/* binding */ showmodal)
/* harmony export */ });
/* harmony import */ var _creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creatingprojects.js */ "./src/creatingprojects.js");
/* harmony import */ var _creatingtodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatingtodos.js */ "./src/creatingtodos.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");




// Function to close the modal
function closeModal() {
  var modal = document.querySelector('.modal');
  modal.close(); // Close the modal
}
function showmodal() {
  var addTask = document.querySelector('.task-btn');
  addTask.addEventListener('click', function () {
    var modal = document.querySelector('.modal');

    // Reset the form fields before showing the modal
    var taskForm = document.querySelector('#task-form');
    taskForm.reset();
    modal.show(); // Show the modal

    // Add event listener to form submission
    taskForm.addEventListener('submit', handleFormSubmit);
  });

  // Add event listener to close button
  var closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', closeModal);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the index of the project
  var projectName = document.querySelector('.todo-main h1').textContent;
  var currentProjectIndex = _creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(function (project) {
    return project.name === projectName;
  });

  // Extract form data
  var formData = new FormData(event.target);
  var title = formData.get('title');
  var description = formData.get('description');
  var dueDate = formData.get('dueDate');
  var priority = formData.get('priority');
  var notes = formData.get('notes');

  // Create task object
  var newTask = (0,_creatingtodos_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(title, description, dueDate, priority, notes);

  // Add the task to the corresponding project
  _creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProjectIndex].tasks.push(newTask);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(_creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__.projects);
  renderTasks(projectName); // Render tasks for the current project

  // Log the updated project
  console.log('Updated project:', _creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__.projects[currentProjectIndex]);

  // Close the modal
  closeModal();
}

// Function to render tasks for a specific project
function renderTasks(projectName) {
  var main = document.querySelector('.todo-main');

  // Find the project object in the projects array
  var currentProject = _creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__.projects.find(function (project) {
    return project.name === projectName;
  });

  // Check if the current project and its tasks exist
  if (currentProject && currentProject.tasks && currentProject.tasks.length > 0) {
    var taskContent = main.querySelector('.task-content');

    // Clear the task content
    taskContent.innerHTML = "";

    // Create HTML elements for each task and append them to taskContent
    currentProject.tasks.forEach(function (task) {
      var taskItem = document.createElement('div');
      taskItem.classList.add('task-item'); // Add class to task item
      taskItem.innerHTML = "\n                <div class='title'>".concat(task.title, "</div>\n                <div class='description'>").concat(task.description, "</div>\n                <div class='due-date'>").concat(task.dueDate, "</div>\n                <div class='priority'> Priority: ").concat(task.priority, "</div>\n                <button class='delete-task-btn'>Delete</button> <!-- Add delete button -->\n            ");
      taskContent.appendChild(taskItem);

      // Add event listener to delete button
      var deleteButton = taskItem.querySelector('.delete-task-btn');
      deleteButton.addEventListener('click', function () {
        deleteTask(projectName, task); // Call function to delete task
      });
    });
  }
}

// Function to delete a task from a project
function deleteTask(projectName, taskToDelete) {
  var currentProject = _creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__.projects.find(function (project) {
    return project.name === projectName;
  });
  if (currentProject && currentProject.tasks && currentProject.tasks.length > 0) {
    // Find index of task to delete
    var taskIndex = currentProject.tasks.findIndex(function (task) {
      return task === taskToDelete;
    });
    if (taskIndex !== -1) {
      // Remove task from tasks array
      currentProject.tasks.splice(taskIndex, 1);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(_creatingprojects_js__WEBPACK_IMPORTED_MODULE_0__.projects);

      // If there are no more tasks, clear the task content
      if (currentProject.tasks.length === 0) {
        var taskContent = document.querySelector('.task-content');
        taskContent.innerHTML = "";
      } else {
        // Re-render tasks for the current project
        renderTasks(projectName);
      }

      // Log the updated project
      console.log('Updated project:', currentProject);
    }
  }
}

// Function to add event listeners to each project
function addProjectListeners() {
  var container = document.querySelector('.container');
  container.addEventListener('click', function (event) {
    var projectElement = event.target.closest('.project');
    if (projectElement) {
      var projectName = projectElement.querySelector('.projectName').textContent;

      // Render tasks for the clicked project
      renderTasks(projectName);
    }
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
    box-sizing: border-box;
}`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;IACI,sBAAsB;AAC1B","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Roboto-Medium.ttf */ "./src/assets/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary-color: #ff4081; /* Pink color */
    --secondary-color: #ff005b; /* Darker pink on hover */
    --background-color: #f4f4f4;
    --container-background-color: #fff;
    --box-shadow-color: rgba(0, 0, 0, 0.1);
    --border-color: #ccc;
    --font:Roboto;
}
@font-face {
    font-family: Roboto;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) ;
}

body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    font-family: var(--font), sans-serif;
    min-height: 100vh;
    background-color: var(--background-color);
}

.container {
    display: flex;
    flex-direction: column;
    min-height: 40vh;
    gap: 10px;
    margin: 20px auto;
    padding: 20px;
    background-color: var(--container-background-color);
    border-radius: 5px;
    box-shadow: 0 0 10px var(--box-shadow-color);
}

.content {
    display: flex;
    flex-direction: column;
}

h1 {
    color: var(--primary-color);
    font-size: 2.1875em; /* 35px converted to em */
}

.todo-btn  {
    padding: 0.625em 1.25em; /* 10px 20px converted to em */
    border: none;
    border-radius: 0 0.3125em 0.3125em 0;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 1em; /* 16px converted to em */
    cursor: pointer;
}

.todo-btn:hover {
    background-color: var(--secondary-color);
}

.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625em;
    border-bottom: 0.0625em solid var(--border-color);
}

.todo-input {
    padding: 0.625em;
    border: 0.0625em solid var(--border-color);
    border-radius: 0.3125em;
    font-size: 1em; /* 16px converted to em */
    margin-bottom: 0.625em; /* 10px converted to em */
}

.project {
    display: flex;
    gap: 1.25em; /* 20px converted to em */
    padding: 1.25em;
}

.project:hover {
    background-color: var(--background-color);
    cursor: pointer;
}

img {
    font-size: 1em;
}

.todo-main {
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25em;
}

.faq img {
    height: 6em;
}

label {
    display: block;
    width: 12.5em; /* 200px converted to em */
}

dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px; /* 500px converted to em */
    background-color: var(--background-color);
    border: 0.0625em solid var(--border-color);
    border-radius: 0.25em;
    padding: 0.625em;
    box-shadow: 0 0 0.625em var(--box-shadow-color);
    z-index: 1;
}

/* Button Styles */
.modal button {
    padding: 0.625em 1.25em;
    border: none;
    border-radius: 0.3125em;
    background-color: var(--primary-color); /* Pink color */
    color: #fff;
    font-size: 1em; /* 16px converted to em */
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 0.625em; /* Add some margin for spacing */
}

.modal .close-modal {
    background-color: transparent;
    color: var(--primary-color); /* Pink color */
    border: none;
    font-size: 1em; /* 16px converted to em */
    cursor: pointer;
}

.task-content {
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px; /* 200px converted to em */
}

.task-item {
    background-color: var(--container-background-color);
    border-left: 0.3125em solid var(--primary-color);
    display: flex;
    border-radius: 0.4375em;
    padding: 0.9375em;
    margin-bottom: 0.9375em;
    min-width: 200px;
    gap: 1.25em; /* 20px converted to em */
}

.task-item:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.title {
    font-size: 2em; /* 32px converted to em */
    font-weight: bold;
    margin-bottom: 0.3125em; /* 5px converted to em */
}

.description {
    color: var(--border-color);
    font-size: 1em; /* 16px converted to em */
}

.due-date {
    font-size: 0.875em; /* 14px converted to em */
    color: var(--primary-color);
}

.priority {
    font-size: 0.875em; /* 14px converted to em */
    font-weight: bold;
    color: var(--primary-color);
    margin-top: auto;
}

.delete-task-btn {
    background-color: #ff3d00; /* Red color */
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.delete-task-btn:hover {
    background-color: #d32f2f; /* Darker red on hover */
}


@media (max-width: 480px) {
    body {
        display: flex;
        flex-direction: column;
    }
    .task-item{
        display: flex;
        flex-direction: column;
    }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB,EAAE,eAAe;IACzC,0BAA0B,EAAE,yBAAyB;IACrD,2BAA2B;IAC3B,kCAAkC;IAClC,sCAAsC;IACtC,oBAAoB;IACpB,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,6CAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;IACpC,iBAAiB;IACjB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,mDAAmD;IACnD,kBAAkB;IAClB,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB,EAAE,yBAAyB;AAClD;;AAEA;IACI,uBAAuB,EAAE,8BAA8B;IACvD,YAAY;IACZ,oCAAoC;IACpC,sCAAsC;IACtC,WAAW;IACX,cAAc,EAAE,yBAAyB;IACzC,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,iDAAiD;AACrD;;AAEA;IACI,gBAAgB;IAChB,0CAA0C;IAC1C,uBAAuB;IACvB,cAAc,EAAE,yBAAyB;IACzC,sBAAsB,EAAE,yBAAyB;AACrD;;AAEA;IACI,aAAa;IACb,WAAW,EAAE,yBAAyB;IACtC,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,aAAa,EAAE,0BAA0B;AAC7C;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,gBAAgB,EAAE,0BAA0B;IAC5C,yCAAyC;IACzC,0CAA0C;IAC1C,qBAAqB;IACrB,gBAAgB;IAChB,+CAA+C;IAC/C,UAAU;AACd;;AAEA,kBAAkB;AAClB;IACI,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,sCAAsC,EAAE,eAAe;IACvD,WAAW;IACX,cAAc,EAAE,yBAAyB;IACzC,eAAe;IACf,sCAAsC;IACtC,mBAAmB,EAAE,gCAAgC;AACzD;;AAEA;IACI,6BAA6B;IAC7B,2BAA2B,EAAE,eAAe;IAC5C,YAAY;IACZ,cAAc,EAAE,yBAAyB;IACzC,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB,EAAE,0BAA0B;AAChD;;AAEA;IACI,mDAAmD;IACnD,gDAAgD;IAChD,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,WAAW,EAAE,yBAAyB;AAC1C;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,cAAc,EAAE,yBAAyB;IACzC,iBAAiB;IACjB,uBAAuB,EAAE,wBAAwB;AACrD;;AAEA;IACI,0BAA0B;IAC1B,cAAc,EAAE,yBAAyB;AAC7C;;AAEA;IACI,kBAAkB,EAAE,yBAAyB;IAC7C,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB,EAAE,yBAAyB;IAC7C,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;AACpB;;AAEA;IACI,yBAAyB,EAAE,cAAc;IACzC,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB,EAAE,wBAAwB;AACvD;;;AAGA;IACI;QACI,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ","sourcesContent":[":root {\n    --primary-color: #ff4081; /* Pink color */\n    --secondary-color: #ff005b; /* Darker pink on hover */\n    --background-color: #f4f4f4;\n    --container-background-color: #fff;\n    --box-shadow-color: rgba(0, 0, 0, 0.1);\n    --border-color: #ccc;\n    --font:Roboto;\n}\n@font-face {\n    font-family: Roboto;\n    src: url('../assets/Roboto-Medium.ttf') ;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    font-family: var(--font), sans-serif;\n    min-height: 100vh;\n    background-color: var(--background-color);\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    min-height: 40vh;\n    gap: 10px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: var(--container-background-color);\n    border-radius: 5px;\n    box-shadow: 0 0 10px var(--box-shadow-color);\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n}\n\nh1 {\n    color: var(--primary-color);\n    font-size: 2.1875em; /* 35px converted to em */\n}\n\n.todo-btn  {\n    padding: 0.625em 1.25em; /* 10px 20px converted to em */\n    border: none;\n    border-radius: 0 0.3125em 0.3125em 0;\n    background-color: var(--primary-color);\n    color: #fff;\n    font-size: 1em; /* 16px converted to em */\n    cursor: pointer;\n}\n\n.todo-btn:hover {\n    background-color: var(--secondary-color);\n}\n\n.todo-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.625em;\n    border-bottom: 0.0625em solid var(--border-color);\n}\n\n.todo-input {\n    padding: 0.625em;\n    border: 0.0625em solid var(--border-color);\n    border-radius: 0.3125em;\n    font-size: 1em; /* 16px converted to em */\n    margin-bottom: 0.625em; /* 10px converted to em */\n}\n\n.project {\n    display: flex;\n    gap: 1.25em; /* 20px converted to em */\n    padding: 1.25em;\n}\n\n.project:hover {\n    background-color: var(--background-color);\n    cursor: pointer;\n}\n\nimg {\n    font-size: 1em;\n}\n\n.todo-main {\n    padding: 1.25em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.25em;\n}\n\n.faq img {\n    height: 6em;\n}\n\nlabel {\n    display: block;\n    width: 12.5em; /* 200px converted to em */\n}\n\ndialog {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    max-width: 500px; /* 500px converted to em */\n    background-color: var(--background-color);\n    border: 0.0625em solid var(--border-color);\n    border-radius: 0.25em;\n    padding: 0.625em;\n    box-shadow: 0 0 0.625em var(--box-shadow-color);\n    z-index: 1;\n}\n\n/* Button Styles */\n.modal button {\n    padding: 0.625em 1.25em;\n    border: none;\n    border-radius: 0.3125em;\n    background-color: var(--primary-color); /* Pink color */\n    color: #fff;\n    font-size: 1em; /* 16px converted to em */\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    margin-top: 0.625em; /* Add some margin for spacing */\n}\n\n.modal .close-modal {\n    background-color: transparent;\n    color: var(--primary-color); /* Pink color */\n    border: none;\n    font-size: 1em; /* 16px converted to em */\n    cursor: pointer;\n}\n\n.task-content {\n    padding: 1.25em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 100px; /* 200px converted to em */\n}\n\n.task-item {\n    background-color: var(--container-background-color);\n    border-left: 0.3125em solid var(--primary-color);\n    display: flex;\n    border-radius: 0.4375em;\n    padding: 0.9375em;\n    margin-bottom: 0.9375em;\n    min-width: 200px;\n    gap: 1.25em; /* 20px converted to em */\n}\n\n.task-item:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n\n.title {\n    font-size: 2em; /* 32px converted to em */\n    font-weight: bold;\n    margin-bottom: 0.3125em; /* 5px converted to em */\n}\n\n.description {\n    color: var(--border-color);\n    font-size: 1em; /* 16px converted to em */\n}\n\n.due-date {\n    font-size: 0.875em; /* 14px converted to em */\n    color: var(--primary-color);\n}\n\n.priority {\n    font-size: 0.875em; /* 14px converted to em */\n    font-weight: bold;\n    color: var(--primary-color);\n    margin-top: auto;\n}\n\n.delete-task-btn {\n    background-color: #ff3d00; /* Red color */\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    padding: 5px 10px;\n    font-size: 14px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.delete-task-btn:hover {\n    background-color: #d32f2f; /* Darker red on hover */\n}\n\n\n@media (max-width: 480px) {\n    body {\n        display: flex;\n        flex-direction: column;\n    }\n    .task-item{\n        display: flex;\n        flex-direction: column;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Roboto-Medium.ttf":
/*!**************************************!*\
  !*** ./src/assets/Roboto-Medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Roboto-Medium.ttf";

/***/ }),

/***/ "./src/images/greeting.svg":
/*!*********************************!*\
  !*** ./src/images/greeting.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "greeting.svg";

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu.png";

/***/ }),

/***/ "./src/images/ques.svg":
/*!*****************************!*\
  !*** ./src/images/ques.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ques.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _dommanipulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dommanipulation.js */ "./src/dommanipulation.js");
/* harmony import */ var _creatingprojects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creatingprojects.js */ "./src/creatingprojects.js");
/* harmony import */ var _images_greeting_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/greeting.svg */ "./src/images/greeting.svg");
/* harmony import */ var _images_ques_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/ques.svg */ "./src/images/ques.svg");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



 // Importing the projects array


var main = document.querySelector(".todo-main");
main.innerHTML = "<div class=\"faq\"><img src=\"".concat(_images_greeting_svg__WEBPACK_IMPORTED_MODULE_4__, "\" alt=\"\"></div>\n<div class='text'>Greeting! This my todolist application please choose any available projects or create new one so you can add your tasks. </div>\n");
(0,_dommanipulation_js__WEBPACK_IMPORTED_MODULE_2__.renderProject)();
(0,_dommanipulation_js__WEBPACK_IMPORTED_MODULE_2__.initializeProjects)();
(0,_dommanipulation_js__WEBPACK_IMPORTED_MODULE_2__.initializeEventListeners)();


// Load projects from localStorage
var loadedProjects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.loadFromLocalStorage)();

// Check if there are projects loaded from localStorage
if (loadedProjects.length > 0) {
  // Replace projects array with loaded projects
  _creatingprojects_js__WEBPACK_IMPORTED_MODULE_3__.projects.splice.apply(_creatingprojects_js__WEBPACK_IMPORTED_MODULE_3__.projects, [0, _creatingprojects_js__WEBPACK_IMPORTED_MODULE_3__.projects.length].concat(_toConsumableArray(loadedProjects)));
}
console.log(_creatingprojects_js__WEBPACK_IMPORTED_MODULE_3__.projects);
})();

/******/ })()
;
//# sourceMappingURL=bundle343fc7c4b2e654f12c41.js.map