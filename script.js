const add = function(a, b) {
    return a + b
}

const subtract =  function(a, b) {
    return a - b
}


const multiply = function(a, b) {
    return a * b
}


const divide = function (a, b){
    if (b === 0) {
        return "Nice try"
    } 
    return a / b }


let number1 = ""
let operator = ""
let number2 = "" 
let esperandoSegundoNumero = false
let acabaDeCalcular = false

let operate = function (operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2)
        case "*":
            return multiply(number1, number2)
        case "/":
            return divide(number1, number2)
    }
};


console.log(operate("x", 5, 0))


const button = document.querySelector(".buttons")
const display  = document.querySelector(".display")


button.addEventListener("click", function (e) { //test
    const valor = e.target.textContent
    if (valor === "C") {
        number1 = ""
        number2 = ""
        operator = ""
        esperandoSegundoNumero = false
        acabaDeCalcular = false
        display.textContent = "0"
        return
    }
    if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
        operator = valor
        esperandoSegundoNumero = true
        acabaDeCalcular = false
        display.textContent = "0"
        return
    }
    if (valor === "=") {
        if (operator === "" || number1 === "" || number2 === "") {
            return
        }
        const resultado = operate(operator, Number(number1), Number(number2))
        display.textContent = resultado
        number1 = String(resultado)
        number2 = ""
        operator = ""
        esperandoSegundoNumero = false
        acabaDeCalcular = true
        return
    }
    if (acabaDeCalcular) {
        number1 = ""
        acabaDeCalcular = false
    }
    if (esperandoSegundoNumero) {
        number2 += valor
        display.textContent = number2
    } else {
        number1 += valor
        display.textContent = number1
    }

})