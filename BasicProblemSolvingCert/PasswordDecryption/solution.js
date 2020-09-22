'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'decryptPassword' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function decryptPassword(s) {
    // Write your code here
    // loop though the length of the string
    let modifiedS = s;
    // for (let i = 0; i <= s.length; i++ ) {
    //     if (s[i] === s[i].toLowerCase()) {
    //         if (s[i+1] === s[i+1].toUpperCase) {
    //             let newS = s.slice(0,i) + s[i+1] + s[i] + '*' + s.slice(i+2)
    //             i++;
    //         }
    //     } else if (parseInt(s[i])) {
    //         // make our string into an array
    //         let s = s.split('');
            
    //         // hold the number in question
    //         let number = s[i];

    //         // replace with a zero
    //         s[i] = '0';

    //         // place the number in question first then join the rest back to it
    //         s = number + s.join('');       
    //     }

    // something to hold the corrected string
    let solution = '';

    // first you want to fix the stars
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
        s = s.slice(0, i-2) + s[i-1] + s[i-2] + s.slice(i+1);
        }
    }

    // now fix the 0 situation
    for (let i = s.length-1; i>0; i--) {
        if (s[i] === '0') {
            s = s.slice(1, i) + s[0] + s.slice(i+1);
        }
    }
    

    return s;
}
function main() {