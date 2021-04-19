
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

function getProjects(){
  if(localStorage.getItem('toDoProjects')){
    return JSON.parse(localStorage.getItem('toDoProjects'));
  }else{
    return [];
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
  projectList.setAttribute('class', 'project-list mx-auto w-75')

  const formContainer = projectSection.appendChild(document.createElement('div'));
  formContainer.setAttribute('class', 'form-container mx-auto w-75')
  const addProjectBtn = formContainer.appendChild(document.createElement('button'));
  
  addProjectBtn.setAttribute('class', 'btn text-center  mt-5 mx-auto text-white bg-dark add-project');
  addProjectBtn.textContent = 'Add Project';
  addProjectBtn.addEventListener('click', displayProjectForm )

  
  const taskSection = mainContent.appendChild(document.createElement('section'));
  taskSection.setAttribute('class', 'task-section ');

  displayProjects();
  displayfooter();
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
    projectItem.setAttribute('id', project.id);
    // if(selectedListId === list.id){
    //   listItem.classList.add('active')
    // }
  })

}



export {start};

// function displayList(){
//   const listUl = document.querySelector('.list')
//   clearContent(listUl);
//   let selectedListId = localStorage.getItem('selectedListId');
//   const taskLists = getList();

//   taskLists.forEach((list)=>{
//     const listItem = listUl.appendChild(document.createElement('li'));
//     listItem.textContent = list.name;
//     listItem.setAttribute('id', list.id);
//     if(selectedListId === list.id){
//       listItem.classList.add('active')
//     }
//   })

// }




