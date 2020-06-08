// Tristan Annaval

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Type your number to get the rank > '
});

rl.prompt()

rl.on('line', (line) => {
    switch (line.trim()) {
        default:
            fibonacci(Number(line.trim()));
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Bye !');
    process.exit(0);
});

function fibonacci(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   console.log(arr[n]);
}

// Tristan Annaval