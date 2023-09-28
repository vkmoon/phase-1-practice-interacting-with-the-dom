document.addEventListener("DOMContentLoaded", initialize)

let interval;
let minusButton;
let plusButton;
let pauseButton;

function initialize(){
    interval = setInterval(upTimer, 1000)
    minusButton = document.getElementById("minus");
    minusButton.onclick = decrement;
    plusButton = document.getElementById("plus");
    plusButton.onclick = increment;
    heartButton = document.getElementById("heart");
    heartButton.onclick = like;
    pauseButton = document.getElementById("pause");
    pauseButton.onclick = pause;
}


function upTimer() {
    let seconds = document.getElementById("counter");
    seconds.innerText ++
}

function decrement(){
    let seconds = document.getElementById("counter");
    seconds.innerText --
}

function increment(){
    let seconds = document.getElementById("counter");
    seconds.innerText ++
}

function pause(){
    clearInterval(interval);
    pauseButton.innerText = "Resume";
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
    pauseButton.onclick = resumeButton;        
}

function resumeButton(){
    interval = setInterval(upTimer, 1000);
    pauseButton.innerText = "pause";
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
    pauseButton.onclick = pause;
}

function like(){
    let seconds = document.getElementById("counter");
    let likeComment = document.querySelector(".likes").createElement("li");
    likeComment.innerText = `${seconds} was liked ${} times`
}