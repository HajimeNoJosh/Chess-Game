// let origBoard = [
// [0,1,0,1,0,1,0,1],
// [1,0,1,0,1,0,1,0],
// [0,1,0,1,0,1,0,1],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [2,0,2,0,2,0,2,0],
// [0,2,0,2,0,2,0,2],
// [2,0,2,0,2,0,2,0]
// ];

// a - h
// 1 - 8


function oneMove()  {
firstCoord = "A2";
let num = parseInt(firstCoord[1]) + 1;
let secondCoord = firstCoord[0] + num;
console.log(secondCoord); 
};

oneMove();

function twoMove()  {
firstCoord = "A2";
let num = parseInt(firstCoord[1]) + 2;
let secondCoord = firstCoord[0] + num;
console.log(secondCoord); 
};

twoMove();