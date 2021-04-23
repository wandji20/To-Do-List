// eslint-disable-next-line import/no-cycle
import { getProjects, start } from './user';

class Project {
  constructor(name) {
    this.name = name;
    this.id = name.toLowerCase();
    this.todos = [];
  }
}

function createProject(target) {
  const projects = getProjects();
  const targetValue = target.value.toLowerCase();
  const invalidName = projects.find((element) => element.name.toLowerCase() === targetValue);

  if (target.value !== '' && !invalidName) {
    const newProject = new Project(target.value);
    projects.push(newProject);
    localStorage.toDoProjects = JSON.stringify(projects);

    start();
  } else {
    alert('Project name already exist or empty');
  }
  target.value = '';
}

function removeProject(projects, project) {
  projects = projects.filter((element) => element.id !== project.id);
  localStorage.toDoProjects = JSON.stringify(projects);
}

export { createProject, Project, removeProject };