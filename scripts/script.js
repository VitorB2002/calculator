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

function equation(content){
    let num1 = "";
    let num2 = "";
    let operation = 0;
    let result = 1;
    let index = 0;
    let lastIndex;

    //num1 definition
    while(index < content.length){

        lastIndex = index;

        switch(content[index]){
            case "+":
                operation = 1;
                index = content.length;
                break;
            case "-":
                operation = 2;
                index = content.length;
                break;
            case "*":
                operation = 3;
                index = content.length;
                break;
            case "/":
                operation = 4;
                index = content.length;
                break;
            default:
                num1 += content[index];
                break;
        }

        index++;
    }

    //num2 definition
    for(let i = lastIndex + 1; i < content.length; i++){
        num2 += content[i];
    }

    switch(operation){
        case 1:
            result = sum(num1*1, num2*1);
            break;
        case 2:
            result = sub(num1*1, num2*1);
            break;
        case 3:
            result = mul(num1*1, num2*1);
            break;
        case 4:
            result = div(num1*1, num2*1);
            break;
        default:
            console.log("Syntax error");
            break;
    }

    console.log(result);
}

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
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
    equation(content);
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