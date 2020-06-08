// Tristan Annaval

console.log("*** User Input ***")
const readline = require('readline');

let tab = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Type 1 to add number to tab or 2 to show tab > '
});

rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case '1':
            rl.question(`Your number : `, (input1) => {
                console.log("Add : " + input1 + " to tab");
                tab.push(Number(input1));
            });
            break;
        case '2':
            console.log(tab);
            break;
        default:
            console.log("Not a option select");
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Bye !');
    process.exit(0);
});

// Tristan Annaval