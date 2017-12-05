function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calcModulo(num1, num2) {
  return num1 % num2;
}

function calculate(num1, num2, func) {
  return func(num1, num2);
}

let num1Input = document.getElementById("number");
let num2Input = document.getElementById("number2");

function printToDOM(value) {
  document.getElementById("output").innerHTML = value;
}


let btns = document.querySelectorAll(".btn")
for (var i = 0; i < btns.length; i++) {
  let  btn = btns[i];
  btn.addEventListener('click', function(){
    console.log(this.id);


    switch(this.id){
      case 'add':
        func = add
        break;
      case 'subtract':
        func = subtract
        break;
      case 'multiply':
        func = multiply
        break;
      case 'divide':
        func = divide;
        break;      
    }
    let result = calculate(+num1Input.value, +num2Input.value, func);
    printToDOM(result);
  })

}  

