

const container = document.getElementById('content');

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

  const formContainer = projectSection.appendChild(document.createElement('div'));
  formContainer.setAttribute('class', 'form-container mx-auto w-75')
  const addProjectBtn = formContainer.appendChild(document.createElement('button'));
  
  addProjectBtn.setAttribute('class', 'btn text-center  mt-5 mx-auto text-white bg-dark add-project');
  addProjectBtn.textContent = 'Add Project';
  addProjectBtn.addEventListener('click', displayProjectForm )

  
  const taskSection = mainContent.appendChild(document.createElement('section'));
  taskSection.setAttribute('class', 'task-section ');


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



  // formContainer.appendChild(addProject);
  formContainer.appendChild(projectForm);
  projectForm.appendChild(nameLabel);
  projectForm.appendChild(nameInput);
  formContainer.appendChild(btnContainer);
  // formContainer.appendChild(submitBtn);
  btnContainer.appendChild(submitBtn);
  btnContainer.appendChild(cancelBtn);
  cancelBtn.addEventListener('click', start )

}


export {start};