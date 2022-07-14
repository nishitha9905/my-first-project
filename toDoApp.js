let textInput = document.getElementById("i1");
let dateInput = document.getElementById("i2");
let textarea = document.getElementById("i3");
let message = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let data=[];
const addTasks = () =>{
   if(textInput.value===''){
    message.innerHTML="*task data must be filled"
   }
   else{
    message.innerHTML=""
    getData();
    add.setAttribute('data-bs-dismiss', 'modal');
    add.click();
    (() => {
      add.setAttribute('data-bs-dismiss', '');
    })();
   }
}
const getData = () =>{
   data.push=({
    text:textInput.value,
    date:dateInput.value,
    desc:textarea.value
   }) 
   showData(data);
}
const showData = () =>{
    console.log(data)
    data.map((item, index) => {
        return(tasks.innerHTML+=`
        <div class="tasks-div" id=${index}>
        <h3>${item.text}</h3>
        <span>date</span>
        <p>desc</p>
        </div>
        `);
    }
    )
   

}
addTasks()
