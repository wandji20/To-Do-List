import './styles.scss';

let selectedListId = localStorage.getItem('selectedListId');




function getList(){
  if(localStorage.getItem('taskLists')){
    return JSON.parse(localStorage.getItem('taskLists'))
  }else{
    return [];
  }
}

class List {
  constructor(name){
    this.name = name;
    this.id = Date.now().toString();
  }
  getName(){
    return this.name
  }
};

function clearContent(item){
  item.textContent = '';
}

function clearField(field){
  field.value = '';
}

function start(){
  const content = document.getElementById('content');
  const listContainer = content.appendChild(document.createElement('div'));
  listContainer.setAttribute('class','list-container mb-4')
  const heading = listContainer.appendChild(document.createElement('h3'));
  heading.innerHTML = 'My Task List'
  const listUl = listContainer.appendChild(document.createElement('ul'));
  listUl.setAttribute('class', 'list');


  const formContainer = listContainer.appendChild(document.createElement('div'));
  const listForm = formContainer.appendChild(document.createElement('form'));
  const listInput = listForm.appendChild(document.createElement('input'));
  listInput.setAttribute('type', 'text');
  listInput.setAttribute('placeholder', '   Add a task list');
  listInput.setAttribute('class', 'list-name py-1')
  let listBtn = listForm.appendChild(document.createElement('span'));
  listBtn.setAttribute('class','btn px-2 py-1 text-light fs-1 list-btn');
  listBtn.textContent = '+'

}


start()



function displayList(){
  const listUl = document.querySelector('.list')
  clearContent(listUl);
  let selectedListId = localStorage.getItem('selectedListId');
  const taskLists = getList();

  taskLists.forEach((list)=>{
    const listItem = listUl.appendChild(document.createElement('li'));
    listItem.textContent = list.name;
    listItem.setAttribute('id', list.id);
    if(selectedListId === list.id){
      listItem.classList.add('active')
    }
  })

}
displayList()


function createList(){
  let list = getList();
  const listName = document.querySelector('.list-name');
  if (listName.value !== ''){
    const newList = new List(listName.value);
    list.push(newList);
    localStorage.taskLists = JSON.stringify(list);
    clearField(listName);
  }
  displayList()
}

function displayTasks(){
  const lists = getList();
  const list = lists.find((list)=> list.id === selectedListId)
  localStorage.selectedListId = selectedListId;
  displayList()
}


const listUl = document.querySelector('.list');
listUl.addEventListener('click', (e)=>{
  selectedListId = e.target.id
  displayTasks();
  // console.log(list);
  // console.log(selectedListId);
});

const listBtn = document.querySelector('.list-btn')
listBtn.addEventListener('click', createList)




