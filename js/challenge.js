document.addEventListener("DOMContentLoaded", initialize);

let interval;
let minusButton;
let plusButton;
let pauseButton;
let likes = {};
let div;
let unorderedList;

function initialize(){
    interval = setInterval(upTimer, 1000);
    minusButton = document.getElementById("minus");
    minusButton.onclick = decrement;
    plusButton = document.getElementById("plus");
    plusButton.onclick = increment;
    heartButton = document.getElementById("heart");
    heartButton.onclick = like;
    pauseButton = document.getElementById("pause");
    pauseButton.onclick = pause;
    submitButton = document.getElementById("submit");
    submitButton.onclick = comments;
    div = document.getElementById("list")
    unorderedList = document.createElement("ul");
    div.appendChild(unorderedList);
}


function upTimer() {
    let seconds = document.getElementById("counter");
    seconds.innerText ++;
}

function decrement(){
    let seconds = document.getElementById("counter");
    seconds.innerText --;
}

function increment(){
    let seconds = document.getElementById("counter");
    seconds.innerText ++;
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
    let seconds = document.getElementById("counter").innerText;
    let likesContainer = document.querySelector(".likes");
    let li = document.createElement("li");
    likesContainer.appendChild(li)
    if (seconds in likes) {
        likes[seconds]++;
    } else {
        likes[seconds] = 1;
    };
    li.innerText = `${seconds} was liked ${likes[seconds]} times`;
}

function comments(event){
    event.preventDefault();
    let commentInput = document.getElementById("comment-input").value;
    let list = document.createElement("li");
    if (commentInput == ""){
        return false;
    }
    else {
    list.innerText = commentInput;
    }
    div.appendChild(list);
    document.querySelector("#comment-form").reset();
}