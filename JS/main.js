let taskInput = document.getElementById('taskInput')
let taskBtn = document.getElementById('taskBtn')
let noTask = document.getElementById('noTask')
let tasks = document.getElementById('tasks')
let invalid = document.getElementById('invalid')
let closeIcon = document.getElementById('closeIcon')
let addTask = ()=> {
let inputData = taskInput.value
if(inputData.trim()==0 || taskInput.value.length <3 ){
    invalid.classList.remove('none')
}
else{
    noTask.classList.add('none')
    tasks.innerHTML+=`
    <div class='alert alert-info text-left pb-3 info1'> ${inputData} 
    <button class="delete btn btn-danger float-right ">Delete</button>
    </div>`
    
}

}
let close =()=> {
    invalid.classList.toggle('none')
}

closeIcon.addEventListener('click' , close)
taskBtn.addEventListener('click' , addTask)





document.addEventListener('click' , function(del) {
if(del.target.classList.contains('delete')){
    del.target.parentElement.remove();}
    if(tasks.children.length==0){
        noTask.classList.remove('none')

    }
    if(del.target.classList.contains('info1')){
        del.target.classList.toggle('decor1')
        del.target.classList.toggle('active')
    }
})
