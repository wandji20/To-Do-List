import {getProjects, start} from './user'

class Task{
  constructor(title, description, priority, project){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.id = Date.now().toString();
    this.status = false;
  }
}


function createTask(title, description, priority, project){
  const projects = getProjects();

  console.log(projects)
  if (title !== '' && description !== '' & priority !== '' && project !== ''){

    const selectedProjectIndex = projects.findIndex(({name})=> name === project);
    const newTask = new Task(title, description, priority, project);
    projects[selectedProjectIndex].todos.push(newTask);
    localStorage.toDoProjects = JSON.stringify(projects);
    start();

  }else{
    alert('Please fill all fields')
  }
}

function updateStatus(projects, project, id){
  let todos = project.todos;
  for (let i=0; i<todos.length; i+=1){

    if(todos[i].status === true){
      todos[i].status = false;
    }else{
      todos[i].status = true;
    }
  }

  localStorage.toDoProjects = JSON.stringify(projects);
}

function removeTodo(projects, project, todoId){
  project.todos = project.todos.filter((x)=> x.id !== todoId)
  localStorage.toDoProjects = JSON.stringify(projects);
}

export {Task, createTask, updateStatus, removeTodo}