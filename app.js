var data;
var data3=[],data5=[],datam=[];
const list = document.getElementById('for');
var curactive = 3;
var toFind = "";
function addUser(user){
    var newStr = user.title;
    if(toFind!="")
    {
        var ind = newStr.indexOf(toFind);
        newStr = user.title.substring(0,ind)+ "<span class='highlight'>" + toFind + "</span>" + newStr.substring(ind+toFind.length);
        
    }
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${user.id}</td>
    <td>${user.userId}</td>
    <td>${newStr}</td>
    <td><a class="item" id = "delete" href = "#"> <i class="fa fa-trash"></i> </a></td>
    `
    return row;

}
function updaterm(flag){
    var activer = document.getElementById("magic");
    var previous = document.getElementById("fresh");
    if(previous != null)
    {
        previous.remove();
    }
    activer.setAttribute("class","active");
    setTimeout(()=>{const div3 = document.createElement('tbody');
    div3.setAttribute('id','fresh');
    data.forEach( user => {
        if(user.id%5==0 && user.id%3==0){
            if(flag==1)
            {
            datam.push(user);
            }
            div3.appendChild(addUser(user));
        }
    });
    list.appendChild(div3);
        deleteLoader();var items = document.querySelectorAll(".item");
        items.forEach((item)=>{
        item.addEventListener('click',function(e){
            e.target.parentElement.parentElement.parentElement.remove();
            e.preventDefault();
            });
            })},0);
    
}
function updater5(flag){
    var activer = document.getElementById("fifth");
    var previous = document.getElementById("fresh");
    if(previous != null)
    {
        previous.remove();
    }
    activer.setAttribute("class","active");
    setTimeout(()=>{const div3 = document.createElement('tbody');
    div3.setAttribute('id','fresh');
    data.forEach( user => {
        if(user.id%5==0){
            if(flag==1){
            data5.push(user);
            }
            div3.appendChild(addUser(user));
        }
    });
    list.appendChild(div3);
    deleteLoader();var items = document.querySelectorAll(".item");
    items.forEach((item)=>{
    item.addEventListener('click',function(e){
        e.target.parentElement.parentElement.parentElement.remove();
        e.preventDefault();
        });
        })},0);
    
}
function updater3(flag){
    var activer = document.getElementById("third");
    var previous = document.getElementById("fresh");
    if(previous != null)
    {
        previous.remove();
    }
    activer.setAttribute("class","active");
    setTimeout(()=>{const div3 = document.createElement('tbody');
    div3.setAttribute('id','fresh');
    data.forEach( user => {
        if(user.id%3==0){
            if(flag == 1){
            data3.push(user);
            }
            div3.appendChild(addUser(user));
        }
    });
    list.appendChild(div3);
    deleteLoader();
    var items = document.querySelectorAll(".item");
    items.forEach((item)=>{
    item.addEventListener('click',function(e){
        e.target.parentElement.parentElement.parentElement.remove();
        e.preventDefault();
        });
        })},0);
    
}
function loader() {
    updater3(1)
    var loader = document.getElementById("loader");
    loader.remove();
    var items = document.querySelectorAll(".item");
    items.forEach((item)=>{
        item.addEventListener('click',function(e){
            e.target.parentElement.parentElement.parentElement.remove();
            e.preventDefault();
            });
    })
}
window.onload = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function(){
        if(this.status === 200) {
            data = JSON.parse(this.responseText);
            data.forEach((user)=>{
                if(user.id%5==0){
                    data5.push(user);
                    if(user.id%3==0)
                    {
                        datam.push(user);
                    }
                }
            })
            updater3(1)
            deleteLoader();
            
    }
        else{
            alert("Not working")
        }
    }
    xhr.send();


}

function createLoader(){
    var place = document.querySelector(".container2");
    var load = document.createElement("div");
    load.setAttribute("id","loader");
    load.setAttribute("class","loader");
    place.appendChild(load);
}

function deleteLoader(){
    var load = document.querySelector(".loader");
    if(load!=null){
        load.remove();
    }
    
}

function entryPoint3(){
    toFind = "";
    createLoader();
    data = data3;
    curactive = 3;
    var activer = document.querySelector(".active");
    activer.setAttribute("class","norm");
    activer.classList.add("tab");
    updater3(0);
}

function entryPoint5(){
    toFind = "";
    createLoader();
    data = data5;
    curactive = 5;
    var activer = document.querySelector(".active");
    activer.setAttribute("class","norm");
    activer.classList.add("tab");
    updater5(0);
}
function entryPointm(){
    toFind = "";
    createLoader();
    data = datam;
    curactive = "m";
    var activer = document.querySelector(".active");
    activer.setAttribute("class","norm");
    activer.classList.add("tab");
    updaterm(0);
}

function queryString(){
    //
    var string3 = document.getElementById("query").value;
    toFind = string3;
    if(string3 === "")
    {
        if(curactive == 3){
            updater3(0);
        }
        else if(curactive == 5){
            updater5(0);
        }
        else{
            updaterm(0);
        }
    }
    else if(curactive == 3){
        data = [];
        data3.forEach((user)=>{
            if(user.title.search(string3)!== -1)
            {
                data.push(user);
            }
        })
        document.getElementById("fresh").remove();
        updater3(0);
        // data = data3;
    }
    else if(curactive == 5){
        data = [];
        data5.forEach((user)=>{
            if(user.title.search(string3)!== -1)
            {
                data.push(user);
            }
        })
        document.getElementById("fresh").remove();
        updater5(0);
        // data = data5;
    }
    else{
        data = [];
        datam.forEach((user)=>{
            if(user.title.search(string3)!== -1)
            {
                data.push(user);
            }
        })
        document.getElementById("fresh").remove();
        updaterm(0);
        // data = datam;
    }
    var items = document.querySelectorAll(".item");
    items.forEach((item)=>{
        item.addEventListener('click',function(e){
            e.target.parentElement.parentElement.parentElement.remove();
            e.preventDefault();
            });
    })
}

function ref(){
    toFind = "";
    if(curactive == 3)
    {
        entryPoint3();
    }
    else if(curactive==5){
        entryPoint5();
    }
    else{
        entryPointm()
    }
}