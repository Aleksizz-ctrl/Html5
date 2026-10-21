const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "#c6ff00";
    hoverBox.style.color = "#111";
});

hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "#2a2a2a";
    hoverBox.style.color = "#f1f1f1";
});

const typeInput = document.getElementById("typeInput");
const typeOutput = document.getElementById("typeOutput");

typeInput.addEventListener("keyup", function () {
    typeOutput.textContent = typeInput.value;
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

calcBtn.addEventListener("click", function () {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const op = operator.value;

    if (isNaN(a) || isNaN(b)) {
        calcResult.textContent = "Please enter both numbers";
        return;
    }

    let result;

    if (op === "+") {
        result = a + b;
    } else if (op === "-") {
        result = a - b;
    } else if (op === "*") {
        result = a * b;
    } else if (op === "/") {
        if (b === 0) {
            calcResult.textContent = "Cannot divide by zero";
            return;
        }
        result = a / b;
    }

    calcResult.textContent = "Result: " + result;
});