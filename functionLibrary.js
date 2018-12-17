const para = document.querySelector("p");
const input = document.getElementById("userInput");

function squared(num){
    return num*num;
}

function cubed(num){
    return Math.pow(num,3);
}

function factorial(num){
    let x= num;
    while (x>1){
        num*= x-1;
        x--;
    }
    return num;
}

input.onchange = ()=>{
    let num = input.value;
    if (isNaN(num) ) {
        para.textContent = 'Please enter a number!';
    } else {
        para.textContent = num + ' is squared ' + squared(num)+ '; '+ num + ' is cubed ' + cubed(num)+ '\t' + num + ' is factorial '+ factorial(num);
    }
}