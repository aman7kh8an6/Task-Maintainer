var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("todo-content");
var item = document.getElementsByTagName("li");
var time = document.getElementById("userTime");
var comp_ul = document.getElementById("completed-task");


function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    
    input.value = "";
   

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    let doneButton = document.createElement("button");
    doneButton.appendChild(document.createTextNode("Done"));
    li.appendChild(doneButton);
    doneButton.addEventListener("click", doneListItem);


    var tim = document.createElement("h6");
    tim.appendChild(document.createTextNode(time.value));
    li.append(tim);
    function deleteListItem() {
        li.classList.add("delete")
    }
    function doneListItem(){
        comp_ul.append(li)
    }
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
