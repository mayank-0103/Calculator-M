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

let target_mousedown;
let target_mouseup;
document.documentElement.addEventListener("mousedown", (event) => {target_mousedown = event.target});
document.documentElement.addEventListener("mouseup", move_with_mouse);

function move_with_mouse(event) {
    target_mouseup = event.target;
    let elem = document.querySelector('.container');
    // Do not move if clicked inside the container or on ignored buttons
    if (target_mouseup === target_mousedown){
        if (!elem.contains(event.target) && !event.target.hasAttribute("data-ignore-move")) {
            move(elem, event.clientY, event.clientX);
        }
    }
}

function appendNum(button) {
    let display = document.querySelector(".display");
    let value = button.dataset.realValue;

    if (value === "sqrt") {
        display.value += "√(";
    } else if (["sin", "cos", "tan"].includes(value)) {
        display.value += `${value}(`;
    } else if (value === "exp") {
        display.value += "exp(";
    } else if (value === "log") {
        display.value += "log10(";
    } else if (value === "ln") {
        display.value += "ln(";
    } else if (value === "^") {
        display.value += "^";
    } else {
        display.value += value;
    }
}

// Attach event listener to all buttons : Event Delegation
document.querySelectorAll(".button").forEach(button => {
    if (button.hasAttribute("data-real-value")) {
        button.addEventListener("click", () => {
            appendNum(button);
        });
    }
});

function calculate() {
    let display = document.querySelector(".display");
    if (!display.value) {
        display.value = "Empty Field";
        setTimeout(clearDisplay, 2000);
        return;
    }

    let expression = display.value;

    // First, ensure balanced parentheses
    let openBrackets = (expression.match(/\(/g) || []).length;
    let closeBrackets = (expression.match(/\)/g) || []).length;
    while (openBrackets > closeBrackets) {
        expression += ")";
        closeBrackets++;
    }
    
    // Fix: Handle trigonometric functions first (degrees to radians)
    expression = expression.replace(/(sin|cos|tan)\(([^)]+)\)/g, (match, func, angle) => {
        return `Math.${func}(${angle} * Math.PI / 180)`;
    });
    
    // Convert functions to JavaScript Math functions
    expression = expression
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/exp\(/g, "Math.exp(")
        .replace(/log10\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/(\d+)\^(\d+)/g, "Math.pow($1, $2)");

    try {
        let result = eval(expression);
        display.value = (Math.round(result * 1000) / 1000).toString();
    } catch (error) {
        console.error("Calculation error:", error);
        console.log("Expression being evaluated:", expression);
        display.value = "Invalid Expression";
        setTimeout(clearDisplay, 2000);
    }
}

function clearDisplay() {
    document.getElementById("box-16").value = "";
}

let target;
function mousedown(event) {
    target = event.target;
    target.style.backgroundColor = "rgb(174, 237, 255)";
    target.style.boxShadow = "none";
}
function mouseup() {
    target.style.removeProperty('background-color');
    target.style.boxShadow = "2px 2px 2px";
}
window.onload = function () {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.addEventListener("mousedown", mousedown));
    document.documentElement.addEventListener("mouseup", mouseup);
};
