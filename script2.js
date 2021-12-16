setInterval(writeQuote, 1000);
function writeQuote() {
    var picQuote = document.getElementById("quote");
    var currentTime = new Date();
    var minutes = currentTime.getMinutes();
    var currtime = currentTime.getHours() + ":"
        + minutes;
    var i = 0;
    while (i < arrTime.length) {
        if (currtime === arrTime[i]) {
            picQuote.innerHTML = arrTask[i];
        }
        i++;
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);