const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
    text.textContent = "The text has been changed!";
});

const styleBox = document.getElementById("styleBox");
const colorBtn = document.getElementById("colorBtn");
const sizeBtn = document.getElementById("sizeBtn");

const colors = ["#c6ff00", "#00e5ff", "#ff9100", "#ff4081"];
let colorIndex = 0;

colorBtn.addEventListener("click", function () {
    styleBox.style.backgroundColor = colors[colorIndex];
    styleBox.style.color = "#111";
    colorIndex = (colorIndex + 1) % colors.length;
});

let fontSize = 18;

sizeBtn.addEventListener("click", function () {
    fontSize += 4;
    if (fontSize > 40) fontSize = 18;
    styleBox.style.fontSize = fontSize + "px";
});

const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let counter = 2;

addBtn.addEventListener("click", function () {
    counter++;
    const li = document.createElement("li");
    li.textContent = "Item " + counter;
    list.appendChild(li);
});

removeBtn.addEventListener("click", function () {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        counter--;
    }
});