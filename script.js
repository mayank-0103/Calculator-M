// Function to center the calculator
function centerCalculator() {
    let elem = document.querySelector('.container');
    elem.style.left = "50%";
    elem.style.top = "50%";
    elem.style.transform = "translateX(-50%) translateY(-50%)";
}

// Function to uncenter the clock(i.e., originsl position)
function uncenterCalculator() {
    let elem = document.querySelector('.container');
    elem.style.left = "5px";
    elem.style.top = "0%";
    elem.style.removeProperty('transform');
}

// Function to change position of the clock in points
function choosePos() {
    let elem = document.querySelector('.container');
    let top_pos = parseInt(prompt("Enter the top position", "5"));
    let left_pos = parseInt(prompt("Enter the left position", "5"));

    if (isNaN(top_pos) || isNaN(left_pos)) {
        alert("Please enter valid numbers!\nCannot change position.");
        return;
    }
    move(elem, top_pos, left_pos);
}

function move(elem, top_pos, left_pos){
    elem.style.position = "absolute";
    elem.style.removeProperty('transform');
    if (left_pos > document.documentElement.clientWidth-elem.clientWidth) {
        elem.style.left = (document.documentElement.clientWidth-elem.clientWidth) + 'px';
    }
    else {
        elem.style.left = left_pos + 'px';
    }
    if (top_pos > document.documentElement.clientHeight-elem.clientHeight) {
        elem.style.top = (document.documentElement.clientHeight-elem.clientHeight) + 'px';
    }
    else {
        elem.style.top = top_pos + 'px';
    }
    if (left_pos < 0) {
        elem.style.left = '0px';
    }
    if (top_pos < 0) {
        elem.style.top = '0px';
    }
}

document.documentElement.addEventListener("click", move_with_mouse);
function move_with_mouse(event) {
    let elem = document.querySelector('.container');
    // Do not move if clicked inside the container or on ignored buttons
    if (!elem.contains(event.target) && !event.target.hasAttribute("data-ignore-move")) {
        move(elem, event.clientY, event.clientX);
    }
}

function appendNum(id) {
    let button = document.getElementById(id);
    console.log(button.value);
    document.querySelector(".display").innerHTML += button.value;
}

function calculate() {
    let display = document.querySelector(".display");
    if (!display.innerHTML) {
        display.innerHTML = "Empty Field";
        let index = setInterval(clearDisplay, 2000);
        setTimeout(() => {
            clearInterval(index);
            console.log("Interval cleared!");
        }, 2000);
        return;
    }
    try {
        let result = eval(display.innerHTML);
        // Round to 3 decimal places
        display.innerHTML = (Math.round(result * 1000) / 1000).toString();
    } catch {
        display.innerHTML = "Invalid Expression";
        let index = setInterval(clearDisplay, 2000);
        setTimeout(() => {
            clearInterval(index);
            console.log("Interval cleared!");
        }, 2000);
    }
}

function clearDisplay() {
    document.getElementById("box-16").innerHTML = "";
}

function mousedown(event) {
    event.target.style.backgroundColor = "rgb(174, 237, 255)";
    event.target.style.boxShadow = "none";
}
function mouseup(event) {
    event.target.style.removeProperty('background-color');
    event.target.style.boxShadow = "2px 2px 2px";
}
window.onload = function () {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.addEventListener("mousedown", mousedown));
    buttons.forEach(button => button.addEventListener("mouseup", mouseup));
};