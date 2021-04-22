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
  const invalidName = projects.find((element)=> element.name.toLowerCase() === target.value.toLowerCase())

  if (target.value !== '' && !invalidName) {
    const newProject = new Project(target.value);
    projects.push(newProject);
    localStorage.toDoProjects = JSON.stringify(projects);
 
    start();
  } else {
    alert('Project name already exist or empty');
  }
  target.value = ''
}

function removeProject(projects, project) {
  console.log(project.id);
  projects = projects.filter( element => element.id !== project.id);
  console.log(project);
  localStorage.toDoProjects = JSON.stringify(projects);
}

export { createProject, Project, removeProject };