//Document elements
const display = document.getElementById("display");

//Numeric buttons
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

//Operators buttons
const equals = document.getElementById("equals");
const sumBtn = document.getElementById("sum");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");

let operations = 0;
let content = "";

function addDisplayContent(content){
    display.innerHTML = content;
}

function equation(content){
    let num = "";
    let operator;
    let firstElement = 1;
    let secondElement = 1;
    let operationResult;
    let operatorIndex;

    if(content[0] == "+" || content[0] == "*" || content[0] == "/"){
        content = "SYNTAX ERROR";
        addDisplayContent(content);
        return
    }

    if(operations > 2){
        content = "SYNTAX ERROR";
        addDisplayContent(content);
        return
    }

    if(content[0] == "-"){
        firstElement = -1;
    }

    //first element definition
    for(let i = 0; i < content.length; i++){
        switch(content[i]){
            case "+":
                    operatorIndex = i;
                    i = content.length;
                    operator = "+";
                    firstElement *= num;
                    num = "";
                break;
            case "-":
                    if(i != 0){
                        operatorIndex = i;
                        i = content.length;
                        operator = "-";
                        firstElement *= num;
                        num = "";
                    }
                break;
            case "*":
                    operatorIndex = i;
                    i = content.length;
                    operator = "*";
                    firstElement *= num;
                    num = "";
                break;
            case "/":
                    operatorIndex = i;
                    i = content.length;
                    operator = "/";
                    firstElement *= num;
                    num = "";
                break;
            default:
                    num += content[i];
                break;
        }
    }

    //Second element definition
    for(let i = operatorIndex+1; i < content.length; i++){
        switch(content[i]){
            case "+":
                    i = content.length;
                    secondElement *= num;
                break;
            case "-":
                    if(i != 0){
                        i = content.length;
                        secondElement *= num;
                    }
                break;
            case "*":
                    i = content.length;
                    secondElement *= num;
                break;
            case "/":
                    i = content.length;
                    secondElement *= num;
                break;
            default:
                    num += content[i];
                break;
        }
    }

    switch(operator){
        case "+":
            operationResult = add(firstElement, secondElement);
            break;
        case "-":
            operationResult = sub(firstElement,secondElement);
            break;
        case "*":
            operationResult = mul(firstElement,secondElement);
            break;
        case "/":
            operationResult = div(firstElement,secondElement);
            break;
    }

    console.log(firstElement + " " + operator + " " + secondElement + " = " + operationResult);
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
    operations++;

    if(operations < 2){
        content += "+";
        addDisplayContent(content);
    }   else{
        content += "+";
        equation(content);
    }
});

subBtn.addEventListener("click", () => {

    if(content != ""){
        operations++;
    }

    if(operations < 2){
        content += "-";
        addDisplayContent(content);
    }   else{
        content += "-";
        equation(content);
    }
});

mulBtn.addEventListener("click", () => {
    operations++;

    if(operations < 2){
        content += "*";
        addDisplayContent(content);
    }   else{
        content += "*";
        equation(content);
    }
});

divBtn.addEventListener("click", () => {
    operations++;

    if(operations < 2){
        content += "/";
        addDisplayContent(content);
    }   else{
        content += "/";
        equation(content);
    }
});