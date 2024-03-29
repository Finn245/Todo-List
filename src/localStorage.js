// Function to save projects and todos to localStorage
export function saveToLocalStorage(projects) {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    console.error('LocalStorage is not supported by your browser!');
  }
}

// Function to load projects and todos from localStorage
export function loadFromLocalStorage() {
  if (typeof Storage !== 'undefined') {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      const loadedProjects = JSON.parse(storedProjects);

      // Check if the default project already exists in the loaded projects
      const defaultProjectIndex = loadedProjects.findIndex(
        (project) => project.name === 'Default Project'
      );

      // If the default project doesn't exist, add it to the loaded projects
      if (defaultProjectIndex === -1) {
        loadedProjects.push({
          name: 'Default Project',
          tasks: [],
        });
      }

      return loadedProjects;
    } else {
      console.log('No data found in localStorage.');
      return [];
    }
  } else {
    console.error('LocalStorage is not supported by your browser!');
    return [];
  }
}
