// eslint-disable-next-line import/no-cycle
import { getProjects, start } from './user';

class Project {
  constructor(name) {
    this.name = name;
    this.id = Date.now().toString();
    this.todos = [];
  }

  getName() {
    return this.name;
  }
}

function createProject(target) {
  const projects = getProjects();
  if (target.value !== '') {
    const newProject = new Project(target.value);
    projects.push(newProject);
    localStorage.toDoProjects = JSON.stringify(projects);
    target.value = '';
    start();
  } else {
    alert('Please add a Project Name');
  }
}

function removeProject(projects, project){
  projects = projects.filter((element)=> element.id !== project.id);
  console.log(projects)
  localStorage.toDoProjects = JSON.stringify(projects);
}


export { createProject, Project, removeProject };