'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {

for (let i = n; i >= 1; i--) {
    let string = '';
    let space = ' ';
    for (let a = 0; a < n; a++) {
        if (a >= i - 1) {
            space = '#';
        }
        string += space;
    }
    console.log(string);
};