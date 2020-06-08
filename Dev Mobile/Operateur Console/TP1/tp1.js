// Tristan Annaval

console.log("***** Application Opérateurs ***** ");

let result = 0;
let number1 = 0;
let number2 = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Your First number : `, (input1) => {
    console.log(`First number : ${input1}`)
    number1 = Number(input1)
    readline.question(`Your Second number : `, (input2) => {
        console.log(`Second number : ${input2}`)
        number2 = Number(input2)
        readline.close();
        
        result = number1 + number2;
        console.log(number1 + " + " + number2 + " = " + result);
        result = number1 - number2;
        console.log(number1 + " - " + number2 + " = " + result);
        result = number1 * number2;
        console.log(number1 + " * " + number2 + " = " + result);
        result = number1 / number2;
        console.log(number1 + " / " + number2 + " = " + result);
        result = number1 % number2;
        console.log(number1 + " % " + number2 + " = " + result);
    })
})

// Tristan Annaval