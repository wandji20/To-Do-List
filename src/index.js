import './styles.scss';
 
let taskList = [];

function start(){
  clearContent();
  displayList()
}


function clearContent(){
  const content = document.querySelector('#content');
  content.innerHTML = '';
}




function displayList(){
  const content = document.getElementById('content');
  const listContainer = content.appendChild(document.createElement('div'));
  listContainer.setAttribute('class','list-container mb-4')
  const heading = listContainer.appendChild(document.createElement('h3'));
  heading.innerHTML = 'My Task List'
  const taskList = listContainer.appendChild(document.createElement('ul'));
  taskList.setAttribute('class', 'list-container mb-4');

  // let list =  localStorage.getItem('taskList') || [];
  let list = [
          {
            name: 'School',
            id: 1,
            tasks:[]
          },
          {
            name: 'Home',
            id: 1,
            tasks:[]
          },
          {
            name: 'Personal',
            id: 1,
            tasks:[]
          }
        ];
  list.forEach((item)=>{
    const listItem = taskList.appendChild(document.createElement('li'));
    listItem.textContent = item.name;
    listItem.setAttribute('class', item.id);
  })
}

displayList();