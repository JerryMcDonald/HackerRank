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

// Complete the plusMinus function below.
function plusMinus(arr) {

// hold the amount of positive numbers
const arrayCount = arr.reduce((countArr, nextNum) => {
    if (nextNum > 0) {
        countArr[0]++;
    } else if (nextNum < 0) {
        countArr[1]++;
    } else {
        countArr[2]++
    }
    return countArr;
}, [0,0,0]);

console.log((arrayCount[0] / arr.length).toFixed(6));
console.log((arrayCount[1] / arr.length).toFixed(6));
console.log((arrayCount[2] / arr.length).toFixed(6));

return arrayCount;

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
