const divNode = document.querySelector("div");
const input = document.getElementById("userInput");


const functionResults = new Map();

function squared(num){
    let numSqr = num*num;
    functionResults.set("is squared", numSqr);
    return numSqr;
}

function cubed(num){
    let numCube= Math.pow(num,3);
    functionResults.set("is cubed", numCube);
    return numCube;
}

function factorial(num){
    let x= num;
    while (x>1){
        num*= x-1;
        x--;
    }
    functionResults.set("is factorial", num);
    return num;
}

function squareRoot(num){
    let numSqrt = Math.sqrt(num); 
    functionResults.set("is square root", numSqrt);
    return numSqrt;
}

function cubicRoot(num){
    let cubedRoot = Math.cbrt(num);
    functionResults.set("is cubic root", cubedRoot)
    return cubedRoot;
}

function addPara(num, key, value){
    let newPara  = document.createElement("p");
    newPara.textContent = num +' '+key+' '+value; 
    divNode.appendChild(newPara);
}

function start(num) {
    cubicRoot(num);
    squareRoot(num);
    factorial(num);
    cubed(num);
    squared(num);
}

input.onchange = ()=>{
    let num = input.value;
    while(divNode.firstChild) {
        divNode.removeChild(divNode.firstChild);
    }
    if (isNaN(num) ) {
        para.textContent = 'Please enter a number!';
    } else {
        // para.textContent = num + ' is squared ' + squared(num)+ '; '+ num + ' is cubed ' + cubed(num)+ '\t' + num + ' is factorial '+ factorial(num);
        start(num);
        console.log(functionResults);
        for (let [key, value] of functionResults) {
            document.body.onload = addPara(num, key, value);
        }
    }
}
