// let origBoard = [
// [0,0,0,0,0,0,0,0],
// [1,1,1,1,1,1,1,1],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [1,1,1,1,1,1,1,1],
// [0,0,0,0,0,0,0,0]
// ];

// a - h bottom row
// 1 - 8 sides
let firstMove = 2;


let pieces = ["pawn", "knight"];

function oneMoveForward(coord)  {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	let secondCoord = firstCoord[0] + num;
	return secondCoord; 
};

function twoPawnMoveForward(coord)  {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 2;
	let secondCoord = firstCoord[0] + num;
	return secondCoord; 
};

function knightMoveForwardRight(coord){
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 2;
	let letter = firstCoord[0];
	switch (letter) {
		case "A" :
		letter = "B"
		break;
		case "B" :
		letter = "C"
		break;
		case "C" :
		letter = "D"
		break;
		case "D" :
		letter = "E"
		break;
		case "E" :
		letter = "F"
		break;
		case "F" :
		letter = "G"
		break;
		case "G" :
		letter = "H"
		break;
		default :
		console.log("Not valid")
	} 
	let secondCoord = letter + num;
	return secondCoord;
};

function knightMoveForwardLeft(coord){
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 2;
	let letter = firstCoord[0];
	switch (letter) {
		case "B" :
		letter = "A"
		break;
		case "C" :
		letter = "B"
		break;
		case "D" :
		letter = "C"
		break;
		case "E" :
		letter = "D"
		break;
		case "F" :
		letter = "E"
		break;
		case "G" :
		letter = "F"
		break;
		case "H" :
		letter = "G"
		break;
		default :
		console.log("Not valid")
	}
	let secondCoord = letter + num;
	return secondCoord;
};

console.log(pieces[1] + " " + knightMoveForwardLeft("B1"))
console.log(pieces[1] + " " + knightMoveForwardRight("B1"))
console.log(pieces[0] + " " + twoPawnMoveForward("E2"));



