// https://www.acmicpc.net/problem/10599

const fs = require('fs');
const input = fs.readFileSync('./input1.txt').toString().split('\n');
const emptyArray = [];

for(let i = 0; i < input.length; i++) {
  emptyArray.push( input[i].split(' ').map(num => Number(num)) );
}

function guessingPersianKingsAge(emptyArray) {

  for (let i = 0; i< emptyArray.length; i++) {
    const [ a, b, c, d ] = emptyArray[i]; // a, b : birth range / c, d : death range
    
    if (a === b && b === c && c === d && d === a) return;
    const minAge = c-a > c-b ? c-b : c-a;
    const maxAge = d-a > d-b ? d-a : d-b;
    console.log(minAge, maxAge);
  }
}

guessingPersianKingsAge(emptyArray);