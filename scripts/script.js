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
    let numbersArr = [];
    let operatorsArr = [];
    let operation = 0;
    let num = "";

    if(content[0] == "+" || content[0] == "-" || content[0] == "*" || content[0] == "/"){
        content = "SYNTAX ERROR";
        addDisplayContent(content);
        return
    }   else if(content[content.length] == "+" || content[content.length] == "-" || content[content.length] == "*" || content[content.length] == "/"){
        content = "SYNTAX ERROR";
        addDisplayContent(content);
        return
    }

    for(let i = 0; i < content.length; i++){

        switch(content[i]){
            case "+":
                    if(num != ""){
                        numbersArr.push(num*1);
                    }
                    operatorsArr.push("+");
                    num = "";
                break;
            case "-":
                    if(num != ""){
                        numbersArr.push(num*1);
                    }
                    operatorsArr.push("-");
                    num = "";
                break;
            case "*":
                    if(num != ""){
                        numbersArr.push(num*1);
                    }
                    operatorsArr.push("*");
                    num = "";
                break;
            case "/":
                    if(num != ""){
                        numbersArr.push(num*1);
                    }
                    operatorsArr.push("/");
                    num = "";
                break;
            default:
                    num += content[i];
                break;
        }

    }

    if(num != ""){
        numbersArr.push(num*1);
    }

    if(numbersArr.length <= operatorsArr.length){
        content = "SYNTAX ERROR";
        addDisplayContent(content);
        return
    }

    //Multiplication priority
    for(let i = 0; i < operatorsArr.length; i++){
        if(operatorsArr[i] == "*"){
            operation = mul(numbersArr[i], numbersArr[i+1]);
            numbersArr.splice(i, 2, operation);
            operatorsArr.splice(i, 1);
            i--;
        }   
    }

    //Division priority
    for(let i = 0; i < operatorsArr.length; i++){
        if(operatorsArr[i] == "/"){
            operation = div(numbersArr[i], numbersArr[i+1]);
            numbersArr.splice(i, 2, operation);
            operatorsArr.splice(i, 1);
            i--;
        }   
    }

    //Sum priority
    for(let i = 0; i < operatorsArr.length; i++){
        if(operatorsArr[i] == "+"){
            operation = sum(numbersArr[i], numbersArr[i+1]);
            numbersArr.splice(i, 2, operation);
            operatorsArr.splice(i, 1);
            i--;
        }   
    }

    console.log(numbersArr);
    console.log(operatorsArr);
    console.log(operation);
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