import {getProjects, start} from './user'
class Project {
  constructor(name){
    this.name = name;
    this.id = Date.now().toString();
    this.todos = [];
  }
  getName(){
    return this.name
  }
};

let predefinedProjects = [new Project('Inbox'), new Project('Today'), new Project('Tomorrow')]

function createProject(target){
  let projects = getProjects();
  if (target.value !== ''){
    const newProject = new Project(target.value);
    projects.push(newProject);
    localStorage.toDoProjects = JSON.stringify(projects);
    target.value = '';
    start();
  }else{
    alert('Please add a Project Name');
  }
}

export {createProject}