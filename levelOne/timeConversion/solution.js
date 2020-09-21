'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */


    if (s[8] === 'A') {
        let amAnswer = s.slice(0,8);
        if (s.slice(0,2) === '12') {
            console.log('---');
            amAnswer = '00' + s.slice(2,8);
        } 
        console.log(amAnswer);
        return(amAnswer);
    }

    let hour = parseInt(s.slice(0,2));
    if (s.slice(0,2) != '12') {
    hour += 12;
    }

    console.log(hour);
    console.log(s);

    let solution = hour.toString() + s.slice(2,8);
    return solution;

    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
