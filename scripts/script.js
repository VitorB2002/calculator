const display = document.getElementById("display");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const sumBtn = document.getElementById("sum");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");

let content = "";

function addDisplayContent(content){
    display.innerHTML = content;
}

//Numeric keyboard events

zeroBtn.addEventListener("click", () => {
    content += "0";
    addDisplayContent(content);
});

oneBtn.addEventListener("click", () => { 
    content += "1";
    addDisplayContent(content);
});

twoBtn.addEventListener("click", () => {
    content += "2";
    addDisplayContent(content);
});

threeBtn.addEventListener("click", () => {
    content += "3";
    addDisplayContent(content);
});

fourBtn.addEventListener("click", () => {
    content += "4";
    addDisplayContent(content);
});

fiveBtn.addEventListener("click", () => {
    content += "5";
    addDisplayContent(content);
});

sixBtn.addEventListener("click", () => {
    content += "6";
    addDisplayContent(content);
});

sevenBtn.addEventListener("click", () => {
    content += "7";
    addDisplayContent(content);
});

eightBtn.addEventListener("click", () => {
        content += "8";
        addDisplayContent(content);
});

nineBtn.addEventListener("click", () => {
    content += "9";
    addDisplayContent(content);
});

clear.addEventListener("click", () => {
    content = "";
    addDisplayContent(content);
});

equals.addEventListener("click", () => {
});

//Operators keyboard events

sumBtn.addEventListener("click", () => {
    content += "+";
    addDisplayContent(content);
});
subBtn.addEventListener("click", () => {
    content += "-";
    addDisplayContent(content);
});
mulBtn.addEventListener("click", () => {
    content += "*";
    addDisplayContent(content);
});
divBtn.addEventListener("click", () => {
    content += "/";
    addDisplayContent(content);
});