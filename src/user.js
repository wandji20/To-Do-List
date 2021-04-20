
let selectedProjectId = localStorage.getItem('selectedProjectId');
const container = document.getElementById('content');


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

class Task{
  constructor(title, description, priority, project){
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.id = Date.now().toString();
  }
}
let predefinedProjects = [new Project('Inbox'), new Project('Today'), new Project('Tomorrow')]

function getProjects(){
  if(localStorage.getItem('toDoProjects')){
    return JSON.parse(localStorage.getItem('toDoProjects'));
  }else{
    localStorage.toDoProjects = JSON.stringify(predefinedProjects);
    return predefinedProjects;
  }
}

function displayNav(){
  const nav = container.appendChild(document.createElement('nav'))
  nav.setAttribute('class', 'navbar navbar-dark bg-dark' );
  const navContent = nav.appendChild(document.createElement('div'));
  navContent.setAttribute('class', 'container-fluid');
  const navBrand = navContent.appendChild(document.createElement('a'));
  navBrand.setAttribute('class', 'navbar-brand');
  navBrand.textContent = 'To Do List'
}

function displayfooter(){
  const footer = container.appendChild(document.createElement('footer'));
  footer.setAttribute('class', 'bg-dark')
  const authors = footer.appendChild(document.createElement('p'))
  authors.setAttribute('class','text-center text-light my-auto')
  authors.innerHTML = 'Copyright 2021  Wandji && Necmi'
}

function clearContent(element){
  element.textContent = ''
}

function start(){
  clearContent(container)
  displayNav();
  const mainContent = container.appendChild(document.createElement('div'))
  mainContent.setAttribute('class', 'main-content');
  const projectSection = mainContent.appendChild(document.createElement('section'));
  projectSection.setAttribute('class', 'project-section ');
  const header = projectSection.appendChild(document.createElement('h3'));
  header.setAttribute('class', 'text-center mt-3');
  header.innerHTML = 'Projects';
  const projectList = projectSection.appendChild(document.createElement('div'));
  projectList.setAttribute('class', 'project-list mx-auto w-75');

  const formContainer = projectSection.appendChild(document.createElement('div'));
  formContainer.setAttribute('class', 'form-container mx-auto w-75');
  const addProjectBtn = formContainer.appendChild(document.createElement('button'));
  
  addProjectBtn.setAttribute('class', 'btn text-center  mt-5 mx-auto text-white bg-dark add-project');
  addProjectBtn.textContent = 'Add Project';
  addProjectBtn.addEventListener('click', displayProjectForm );

  
  const taskSection = mainContent.appendChild(document.createElement('section'));
  taskSection.setAttribute('class', 'task-section');

  const addTaskBtn = taskSection.appendChild(document.createElement('button'));
  addTaskBtn.setAttribute('class', 'btn mt-2 ml-5 text-white bg-dark add-task');
  addTaskBtn.innerHTML = 'Add Task'
  addTaskBtn.addEventListener('click', displayTaskForm);
  
  const projectContainer = taskSection.appendChild(document.createElement('div'));
  projectContainer.setAttribute('class', 'project-container ');

  displayProjects();
  displayfooter();
}

function displayTaskForm(){
  const projectContainer = document.querySelector('.project-container');
  clearContent(projectContainer);
  const taskForm = projectContainer.appendChild(document.createElement('form'));
  taskForm.setAttribute('class', ' mx-auto mt-3')

  const titleLabel = taskForm.appendChild(document.createElement('label'));
  titleLabel.setAttribute('class', 'form-label');
  titleLabel.setAttribute('for','task-title' );
  titleLabel.innerHTML = 'Name';

  const titleInput = taskForm.appendChild(document.createElement('input'));
  titleInput.setAttribute('class', 'form-control task-title w-50');
  titleInput.setAttribute('type','text' );
  titleInput.setAttribute('placeholder','   Task title name' );

  const descriptionLabel = taskForm.appendChild(document.createElement('label'));
  descriptionLabel.setAttribute('class', 'form-label mt-3');
  descriptionLabel.setAttribute('for','task-description' );
  descriptionLabel.innerHTML = 'Description';

  const description = taskForm.appendChild(document.createElement('textarea'));
  description.setAttribute('class', 'form-control mt-2 task-description w-75');
  description.setAttribute('placeholder','     Add Task description' );

  const priorityLabel = taskForm.appendChild(document.createElement('label'));
  priorityLabel.setAttribute('class', 'form-label mt-3');
  // priorityLabel.setAttribute('for','task-title' );
  priorityLabel.innerHTML = 'Select Priority';
  const prioritySelectTag = taskForm.appendChild(document.createElement('select'))
  prioritySelectTag.setAttribute('class', 'w-50')
  const priorities = ['', 'Low', 'Average', 'High'];
  for(let i = 0; i< priorities.length; i += 1){
    const option = prioritySelectTag.appendChild(document.createElement('option'));
    option.setAttribute('value', priorities[i]);
    option.innerHTML = priorities[i];
  }


  const projectLabel = taskForm.appendChild(document.createElement('label'));
  projectLabel.setAttribute('class', 'form-label  mt-3');
  // priorityLabel.setAttribute('for','task-title' );
  projectLabel.innerHTML = 'Select Project';
  const projectSelectTag = taskForm.appendChild(document.createElement('select'))
  projectSelectTag.setAttribute('class', 'w-50 project-select')
  const projects = getProjects();
  // const allProjects = projects.concat(predefinedProjects)
  const option = projectSelectTag.appendChild(document.createElement('option'));
  if(selectedProjectId){
    let project = projects.filter((project)=>{project.id === selectedProjectId})
    option.setAttribute('value', project.name);
    option.innerHTML = project.name;
    
  }else{
    for(let i = 0; i< projects.length; i += 1){
      const option = projectSelectTag.appendChild(document.createElement('option'));
      option.setAttribute('value', projects[i].name);
      option.innerHTML = projects[i].name;
    }
  }

  const buttons = projectContainer.appendChild(document.createElement('p'));
  buttons.setAttribute('class', 'd-flex justify-content-between mt-4 w-75 mx-auto')
  const createTaskBtn = buttons.appendChild(document.createElement('button'));
  createTaskBtn.setAttribute('class', 'btn bg-success')
  createTaskBtn.innerHTML = 'Create Task'


  createTaskBtn.addEventListener('click', ()=>{
    createTask(titleInput.value, description.value, prioritySelectTag.value, projectSelectTag.value)
  })

  const cancelTaskBtn = buttons.appendChild(document.createElement('button'))
  cancelTaskBtn.setAttribute('class', 'btn bg-danger')
  cancelTaskBtn.innerHTML = 'Cancel'
  cancelTaskBtn.addEventListener('click', start)


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

function displayProjectForm(){

  const formContainer = document.querySelector('.form-container');
  clearContent(formContainer);

  const projectForm = document.createElement('form');

  projectForm.setAttribute('class', 'project-form mx-auto hidden');

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('class', 'form-label');
  nameLabel.setAttribute('for','project-name' );
  nameLabel.innerHTML = 'Name';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('class', 'form-control');
  nameInput.setAttribute('type','text' );
  nameInput.setAttribute('id', 'project-name');
  nameInput.setAttribute('placeholder','   Project name' );

  const btnContainer = document.createElement('div');
  
  btnContainer.setAttribute('class', 'btn-container d-flex justify-content-between mx-auto w-75');
  const submitBtn = document.createElement('button');

  submitBtn.setAttribute('class', 'btn text-light bg-dark mt-2 mr-0 submit-btn hidden button');
  submitBtn.setAttribute('id', 'button');
  submitBtn.innerHTML= 'Submit';

  const cancelBtn = document.createElement('button');

  cancelBtn.setAttribute('class', 'btn text-light bg-danger mt-2 mr-0 cancel-btn hidden');
  cancelBtn.innerHTML= 'Cancel';



  formContainer.appendChild(projectForm);
  projectForm.appendChild(nameLabel);
  projectForm.appendChild(nameInput);
  formContainer.appendChild(btnContainer);

  btnContainer.appendChild(submitBtn);
  btnContainer.appendChild(cancelBtn);
  cancelBtn.addEventListener('click', start )
  submitBtn.addEventListener('click', ()=>{
    createProject(nameInput);
  })

}


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

function displayProjects(){
  const projectsList = document.querySelector('.project-list')
  clearContent(projectsList);
  let selectedProjectId = localStorage.getItem('selectedProjectId');
  let projects = getProjects();

  projects.forEach((project)=>{
    const projectItem = projectsList.appendChild(document.createElement('h6'));
    projectItem.textContent = project.name;
    projectItem.setAttribute('id', project.id+project.name);
    if(selectedProjectId === projectItem.id){
      projectItem.classList.add('active')
    }
  })

}

function displayTodos(id){
  let projects = getProjects();
  let project = projects.find((element)=> element.id === id );
  console.log(project)
  if (project){
    const projectContainer = document.querySelector('.project-container');
    clearContent(projectContainer);
    project.todos.forEach((item)=>{
      let todo = projectContainer.appendChild(document.createElement('input'))
      todo.setAttribute('class', 'mt-5');

    })
  }
}





export {start, displayTodos};






