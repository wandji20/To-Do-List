// import './styles.scss';

// let selectedListId = localStorage.getItem('selectedListId');




// function getList(){
//   if(localStorage.getItem('taskLists')){
//     return JSON.parse(localStorage.getItem('taskLists'))
//   }else{
//     return [];
//   }
// }

// class List {
//   constructor(name){
//     this.name = name;
//     this.id = Date.now().toString();
//     this.tasks = [];
//   }
//   getName(){
//     return this.name
//   }
// };

// class Task {
//   constructor(name){
//     this.name = name;
//     this.id = Date.now().toString();
//   }
// };

// function clearContent(item){
//   item.textContent = '';
// }

// function clearField(field){
//   field.value = '';
// }

// function start(){
//   const content = document.getElementById('content');
//   const listContainer = content.appendChild(document.createElement('div'));
//   listContainer.setAttribute('class','list-container mb-4')
//   const heading = listContainer.appendChild(document.createElement('h3'));
//   heading.innerHTML = 'My Task List'
//   const listUl = listContainer.appendChild(document.createElement('ul'));
//   listUl.setAttribute('class', 'list');


//   const formContainer = listContainer.appendChild(document.createElement('div'));
//   const listForm = formContainer.appendChild(document.createElement('form'));
//   const listInput = listForm.appendChild(document.createElement('input'));
//   listInput.setAttribute('type', 'text');
//   listInput.setAttribute('placeholder', '   Add a task list');
//   listInput.setAttribute('class', 'list-name py-1')
//   let listBtn = listForm.appendChild(document.createElement('span'));
//   listBtn.setAttribute('class','btn px-2 py-1 text-light fs-1 list-btn');
//   listBtn.textContent = '+'


//   const listTasks = content.appendChild(document.createElement('div'));
//   listTasks.setAttribute('class', 'list-task')
//   const taskHeader = listTasks.appendChild(document.createElement('div'));
//   taskHeader.setAttribute('class', 'd-flex justify-content-between task-header');

// }


// start()



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
// displayList()


// function createList(){
//   let list = getList();
//   const listName = document.querySelector('.list-name');
//   if (listName.value !== ''){
//     const newList = new List(listName.value);
//     list.push(newList);
//     localStorage.taskLists = JSON.stringify(list);
//     clearField(listName);
//   }
//   displayList()
// }

// function createTask(){

//   let lists = getList();
//   let list = lists.find((list)=> list.id === selectedListId)
//   const taskName = document.querySelector('.task-name');
//   if (taskName.value !== ''){
//     const newTask = new Task(taskName.value);
//     list.tasks.push(newTask);
//     localStorage.taskLists = JSON.stringify(lists);
//     clearField(taskName);
//   }
//   displayTaskDetails()
// }


// function displayTaskDetails(){

//   const content = document.querySelector('#content');
//   const lists = getList();
//   const list = lists.find((list)=> list.id === selectedListId)

//   const listTasks = document.querySelector('.list-task');

//   if(list === null){
//    listTasks.style.display = 'none'
//   //  localStorage.removeItem('selectedListId')
//   }else{
//     listTasks.style.display = ''
//     selectedListId = list.id;
//     clearContent(listTasks);
//     const taskHeader = listTasks.appendChild(document.createElement('div'));
//     taskHeader.setAttribute('class', 'd-flex justify-content-between');
    
  
  
  
//     const taskTitle = taskHeader.appendChild(document.createElement('h5'))
//     taskTitle.setAttribute('class', 'mr-2');
//     taskTitle.innerHTML = list.name;
//     const taskDetails = taskHeader.appendChild(document.createElement('p'))
//     taskDetails.innerHTML = `${list.tasks.length} Tasks`
  
//     const tasks = listTasks.appendChild(document.createElement('div'));
//     tasks.setAttribute('class','ml-4');
//     list.tasks.forEach((task)=>{
//       const input = tasks.appendChild(document.createElement('input') )
//       input.setAttribute('type', 'checkbox')
//       const label = tasks.appendChild(document.createElement('label'));
//       label.setAttribute('for',task.id);
//       label.textContent = task.name
//     })
  
  
  
  
//     const formContainer = listTasks.appendChild(document.createElement('div'));
//     formContainer.setAttribute('class', 'task-form')
//     const taskForm = formContainer.appendChild(document.createElement('form'));
//     taskForm.setAttribute('class', 'task-form')
//     const taskInput = taskForm.appendChild(document.createElement('input'));
//     taskInput.setAttribute('type', 'text');
//     taskInput.setAttribute('placeholder', '   Add a task');
//     taskInput.setAttribute('class', 'task-name py-1')
//     let taskBtn = taskForm.appendChild(document.createElement('span'));
//     taskBtn.setAttribute('class','btn px-2 py-1 text-light fs-1 task-btn');

//     taskBtn.textContent = '+'
//   }
// }
// if (selectedListId){displayTaskDetails()}

// function displayTasks(){

//   localStorage.selectedListId = selectedListId;

//   if (selectedListId){displayTaskDetails()}
//   displayList()
// }


// const listUl = document.querySelector('.list');
// listUl.addEventListener('click', (e)=>{
//   selectedListId = e.target.id

//   displayTasks(e);
// });

// const listBtn = document.querySelector('.list-btn');
// listBtn.addEventListener('click', createList);


// const taskForm = document.querySelector('.task-form');
// const taskBtn = document.querySelector('.task-btn');
// taskBtn.addEventListener('click', createTask)

import './styles.scss';

import {start, displayTodos} from './user'



start()

// displayTodos( "1618915050978Today")





