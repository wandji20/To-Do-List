import displayNav from './nav'
import displayFooter from './footer';
import {Task, createTask, updateStatus, removeTodo} from './todo';
import {Project, createProject} from './project';




let selectedProjectId = localStorage.getItem('selectedProjectId');
const container = document.getElementById('content');


function getProjects(){
  if(localStorage.getItem('toDoProjects')){
    return JSON.parse(localStorage.getItem('toDoProjects'));
  }else{
    localStorage.toDoProjects = JSON.stringify(predefinedProjects);
    return predefinedProjects;
  }
}



function clearContent(element){
  element.textContent = ''
}


function displayTaskForm(){
  const projectContainer = document.querySelector('.project-container');
  clearContent(projectContainer);
  const taskForm = projectContainer.appendChild(document.createElement('form'));
  taskForm.setAttribute('class', ' mx-auto mt-3')
  
  const titleLabel = taskForm.appendChild(document.createElement('label'));
  titleLabel.setAttribute('class', 'form-label');
  titleLabel.setAttribute('for','task-title' );
  titleLabel.innerHTML = 'Title';
  
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
  const priorities = ['Low', 'Average', 'High'];
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
  let selectedProjectId = localStorage.selectedProjectId;
  
  if(selectedProjectId){
    const option = projectSelectTag.appendChild(document.createElement('option'));
    let project = projects.find((project)=> project.id+project.name === selectedProjectId )
    
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



function displayProjects(){
  const projectsList = document.querySelector('.project-list')
  clearContent(projectsList);
  let selectedProjectId = localStorage.getItem('selectedProjectId');
  let projects = getProjects();
  
  projects.forEach((project)=>{
    const projectItem = projectsList.appendChild(document.createElement('h6'));
    projectItem.textContent = project.name;
    projectItem.setAttribute('id', project.id+project.name);
    projectItem.addEventListener('click', ()=>{
      
      selectedProjectId = projectItem.id;
      localStorage.selectedProjectId = projectItem.id;
      displayTodos(selectedProjectId);
    })
    
  })
  displayTodos(selectedProjectId);
  
}

function displayTodos(id){
  let projects = getProjects();
  let project = projects.find((element)=> element.id+element.name === id );
  console.log(projects)
  if (project){
    const projectContainer = document.querySelector('.project-container');
    clearContent(projectContainer);
    project.todos.forEach((item)=>{
      
      const itemCont = projectContainer.appendChild(document.createElement('div'));
      itemCont.setAttribute('class', `d-flex justify-content-between ${item.id}`);
      const pTag = itemCont.appendChild(document.createElement('p'));
      
      let todoCheckBox = pTag.appendChild(document.createElement('input'))
      todoCheckBox.setAttribute('class', 'd-inline-block mx-3');
      todoCheckBox.setAttribute('type', 'checkbox');
      todoCheckBox.setAttribute('id', item.id);
      
      let todoLabel = pTag.appendChild(document.createElement('label'))
      todoLabel.setAttribute('class', 'd-inline-block');
      todoCheckBox.setAttribute('for', item.id);
      todoLabel.innerHTML = item.description;
      
      
      const span = itemCont.appendChild(document.createElement('span'));
      span.setAttribute('class', 'd-inline-block')
      const editBtn = span.appendChild(document.createElement('button'));
      editBtn.setAttribute('class', 'bg-info btn mr-2')
      editBtn.innerHTML = 'Edit'
      const removeBtn = span.appendChild(document.createElement('button'));
      removeBtn.setAttribute('class', 'bg-danger btn')
      removeBtn.innerHTML = 'Remove'
      removeBtn.addEventListener('click', (e)=>{
        projectContainer.removeChild(e.target.parentNode.parentNode)
        removeTodo(projects, project, item.id)
      })
      
      if(item.status){
        todoCheckBox.checked = true;
        todoLabel.classList.add('done-task');
      }
      
      todoCheckBox.addEventListener('click', ()=>{
        
        if (todoCheckBox.checked){
          todoLabel.classList.add('done-task');
        }else{
          todoLabel.classList.remove('done-task')
        }
        updateStatus(projects, project, item)
      })
    })
  }
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
  projectContainer.setAttribute('class', 'project-container mt-4 mx-3 ');

  // console.log(selectedProjectId)
  displayProjects();
  displayFooter();
}



export {start, getProjects};






