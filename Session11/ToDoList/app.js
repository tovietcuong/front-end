let ul=document.getElementById('ul');
let btnDelete = document.getElementById('btnDelete');
let form = document.getElementById('form');
form.onsubmit = function(event){
    event.preventDefault();
    const title = (form.title.value);
    console.log(form.title.value);
    const newLi = document.createElement("li");
    const btnDelete =document.createElement("button");
    newLi.innerText = title;
    btnDelete.innerText = "Delete";
    ul.appendChild(newLi);
    newLi.appendChild(btnDelete);
    btnDelete.classList.add("btnDelete");
    btnDelete.onclick = function(){
       console.log(newLi.remove());
    } 
    form.title.value = ' ';
 }