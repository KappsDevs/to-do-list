const addBtn = document.querySelector('.button');
const list = document.getElementById('list');

function clear(){
    document.querySelector("#input-box").value = '';
}

function addTask(){

    const task = document.getElementById('input-box');
    
    
    if(task.value === ''){
        alert("Write something!");
        return;
    }

    let li = document.createElement('li');
    li.textContent = task.value;
    list.appendChild(li);
    
    let deleteIcon = document.createElement('img');
    deleteIcon.src = 'assets/styles/trash3.svg'
    deleteIcon.className = 'remove-button';
    li.appendChild(deleteIcon);


    clear();
    saveData();
}


/* 
    Toggle between adding and removing a class name from an element with JavaScript.

*/
function removeTask(event){
    
    const target = event.target;

    if(target.tagName === "LI"){
        target.classList.toggle('checked');
        saveData();
    }else if(target.tagName === 'IMG'){
        target.parentElement.remove();
        saveData();
    }

}


/* 
    The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; 
    the stored data is saved across browser sessions.
*/
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();
addBtn.addEventListener('click', addTask);
list.addEventListener('click', removeTask);