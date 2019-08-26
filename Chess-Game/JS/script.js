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


let pieces = ["pawn", "knight", "Bishop"];

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

function knightMoveTwoForwardRight(coord) {
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

function knightMoveTwoForwardLeft(coord) { 
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

function knightMoveOneForwardLeft(coord) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];
	switch (letter) {
		case "H" :
		letter = "F"
		break;
		case "G" :
		letter = "E"
		break;
		case "F" :
		letter = "D"
		break;
		case "E" :
		letter = "C"
		break;
		case "D" :
		letter = "B"
		break;
		case "C" :
		letter = "A"
		break;
		default :
		console.log("Not valid")
	}
	let secondCoord = letter + num;
	return secondCoord;
};

function knightMoveOneForwardRight(coord) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];
	switch (letter) {
		case "A" :
		letter = "C"
		break;
		case "B" :
		letter = "D"
		break;
		case "C" :
		letter = "E"
		break;
		case "D" :
		letter = "F"
		break;
		case "E" :
		letter = "G"
		break;
		case "F" :
		letter = "H"
		break;
		default :
		console.log("Not valid")
	}
	let secondCoord = letter + num;
	return secondCoord;
};

function knightMoveOneDownLeft(coord) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 1;
	let letter = firstCoord[0];
	switch (letter) {
		case "H" :
		letter = "F"
		break;
		case "G" :
		letter = "E"
		break;
		case "F" :
		letter = "D"
		break;
		case "E" :
		letter = "C"
		break;
		case "D" :
		letter = "B"
		break;
		case "C" :
		letter = "A"
		break;
		default :
		console.log("Not valid")
	}
	let secondCoord = letter + num;
	return secondCoord;
};

function knightMoveOneDownRight(coord) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 1;
	let letter = firstCoord[0];
	switch (letter) {
		case "A" :
		letter = "C"
		break;
		case "B" :
		letter = "D"
		break;
		case "C" :
		letter = "E"
		break;
		case "D" :
		letter = "F"
		break;
		case "E" :
		letter = "G"
		break;
		case "F" :
		letter = "H"
		break;
		default :
		console.log("Not valid")
	}
	let secondCoord = letter + num;
	return secondCoord;
};


function knightMoveTwoDownRight(coord) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 2;
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


function knightMoveTwoDownLeft(coord) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 2;
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

let lettersForwardRight = ["A", "B", "C", "D", "E", "F", "G", "H"];
let lettersForwardLeft = ["H", "G", "F", "E", "D", "C", "B", "A"];

function bishopMoveForwardRightDiagonal(coord, numberOfMoves) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves
			let letter = lettersForwardRight[newLetter]
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function bishopMoveForwardLeftDiagonal(coord, numberOfMoves) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves
			let letter = lettersForwardLeft[newLetter]
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function bishopMoveBackwardLeftDiagonal(coord, numberOfMoves) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves
			let letter = lettersForwardLeft[newLetter]
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function bishopMoveBackwardRightDiagonal(coord, numberOfMoves) {
	firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter]
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

console.log(pieces[2] + " " + bishopMoveBackwardRightDiagonal("A1", 7))
console.log(pieces[2] + " " + bishopMoveBackwardLeftDiagonal("E4", 3))
console.log(pieces[2] + " " + bishopMoveForwardLeftDiagonal("B2", 1))
console.log(pieces[2] + " " + bishopMoveForwardRightDiagonal("G2", 1))
console.log(pieces[1] + " " + knightMoveTwoDownRight("E5"));
console.log(pieces[1] + " " + knightMoveTwoDownLeft("E5"));
console.log(pieces[1] + " " + knightMoveOneDownRight("E5"));
console.log(pieces[1] + " " + knightMoveOneDownLeft("E5"));
console.log(pieces[1] + " " + knightMoveOneForwardRight("A1"));
console.log(pieces[1] + " " + knightMoveOneForwardLeft("H1"));
console.log(pieces[1] + " " + knightMoveTwoForwardLeft("B1"));
console.log(pieces[1] + " " + knightMoveTwoForwardRight("B1"));
console.log(pieces[0] + " " + twoPawnMoveForward("E2"));



