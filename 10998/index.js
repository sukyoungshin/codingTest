// A x B
// https://www.acmicpc.net/problem/10998

var fs = require('fs');
var input = fs.readFileSync('./input1.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a*b);