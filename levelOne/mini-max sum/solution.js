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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
        let min = arr.reduce((accum, num) => {
            accum += num;
            return accum;
        }, 0);
        let max = 0;

        for (let i = 0; i < arr.length; i++) {
            let check = 0;
            arr.forEach((num, index) => {
                if (index != i) {
                    check += num;
                }
            })
            if (check > max) {
                max = check;
            } 
            if (check <= min) {
                min = check;
            }
        }

        console.log(min, max);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}