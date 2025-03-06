// Function to center the calculator
function centerCalculator() {
    let elem = document.querySelector('.container');
    elem.style.position = "absolute";
    elem.style.left = "50%";
    elem.style.top = "50%";
    elem.style.transform = "translateX(-50%) translateY(-50%)";
}

// Function to uncenter the clock(i.e., originsl position)
function uncenterCalculator() {
    let elem = document.querySelector('.container');
    elem.style.removeProperty('position');
    elem.style.removeProperty('left');
    elem.style.removeProperty('top');
    elem.style.removeProperty('transform');
}

// Function to change position of the clock
function choosePos() {
    let elem = document.querySelector('.container');
    let top_pos = prompt("Enter the top position", "5");
    let left_pos = prompt("Enter the left position", "5");
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
}

function appendNum(id) {
    let elem = document.getElementById(id);
    console.log(elem.value);
    document.querySelector(".display").innerHTML += elem.value;
}

function calculate() {
    let elem = document.querySelector(".display");
    if (!elem.innerHTML) {
        elem.innerHTML = "Empty Field";
        let index = setInterval(clearDisplay, 2000);
        setTimeout(() => {
            clearInterval(index);
            console.log("Interval cleared!");
        }, 2000);
        return;
    }
    try {
        let result = eval(elem.innerHTML);
        // Round to 3 decimal places
        elem.innerHTML = (Math.round(result * 1000) / 1000).toString();
    } catch {
        elem.innerHTML = "Invalid Expression";
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