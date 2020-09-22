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
 * Complete the 'getMinCost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY crew_id
 *  2. INTEGER_ARRAY job_id
 */

function getMinCost(crew_id, job_id) {
    // Write your code here
    // sort the crew in order
    let sortedCrew = crew_id.sort((a,b)=>a-b);
    // sort the job in order
    let sortedJob = job_id.sort((a,b)=>a-b);

    console.log(sortedCrew, sortedJob);

    // keep a count of all our moves
    let count = 0;
    // loop the length of the eaither array
    for (let i = 0; i < sortedCrew.length; i++) {
        let jobNum = sortedJob[i];
        let crewNum = sortedCrew[i];
        let num = 0;
        
        if (jobNum >= crewNum) {
        num = jobNum - crewNum;
        } else {
        num = crewNum - jobNum;
        }

        count += num;
    }

    return count;

}
function main() {