var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("todo-content");
var item = document.getElementsByTagName("li");
var time = document.getElementById("userTime");

var arrTask = new Array();
var arrTime = new Array();

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
    arrTask.push(input.value);
    arrTime.push(time.value);
    input.value = "";
    li.append(" " + time.value);

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete")
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

