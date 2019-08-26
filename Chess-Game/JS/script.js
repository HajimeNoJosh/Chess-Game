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

// let listItems = document.querySelectorAll('.black2');

// for (var i = 0; i < listItems.length; i += 1) {
// listItems[i].className = 'blackPawn';
// };


let firstMove = 0;

let pieces = ["pawn", "knight", "bishop", "rook", "queen", "king"];

const lettersForwardRight = ["A", "B", "C", "D", "E", "F", "G", "H"];
const lettersForwardLeft = ["H", "G", "F", "E", "D", "C", "B", "A"];


function oneMoveForward(coord)  {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	let secondCoord = firstCoord[0] + num;
	return secondCoord; 
};

function twoPawnMoveForward(coord)  {
	if (firstMove === 0) {
		firstMove = firstMove + 1;
		const firstCoord = coord;
		let num = parseInt(firstCoord[1]) + 2;
		let secondCoord = firstCoord[0] + num;
		return secondCoord;  
	} else {
		throw "Invalid Move";
	}
};



function knightMoveTwoForwardRight(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 2;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function knightMoveTwoForwardLeft(coord) { 
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 2;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i - 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function knightMoveOneForwardLeft(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i - 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function knightMoveOneForwardRight(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function knightMoveOneDownLeft(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 1;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i - 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function knightMoveOneDownRight(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 1;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};


function knightMoveTwoDownRight(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 2;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};


function knightMoveTwoDownLeft(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 2;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i - 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};



function bishopMoveForwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function bishopMoveForwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function bishopMoveBackwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function bishopMoveBackwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function rookMoveForward(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = letter + num;
	return secondCoord;
};

function rookMoveBackward(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	console.log()
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = letter + num;
	return secondCoord;
};

function rookMoveRight(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = firstCoord[1];
	let letter = firstCoord[0];
for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};


function rookMoveLeft(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = firstCoord[1];
	let letter = firstCoord[0];
for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function queenMoveLeft(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = firstCoord[1];
	let letter = firstCoord[0];
for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function queenMoveRight(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = firstCoord[1];
	let letter = firstCoord[0];
for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function queenMoveForwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function queenMoveForwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function queenMoveBackwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function queenMoveBackwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function queenMoveForward(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = letter + num;
	return secondCoord;
};

function queenMoveBackward(coord, numberOfMoves) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	console.log()
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = letter + num;
	return secondCoord;
};

function kingMoveLeft(coord) {
	const firstCoord = coord;
	let num = firstCoord[1];
	let letter = firstCoord[0];
for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 1
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function kingMoveRight(coord) {
	const firstCoord = coord;
	let num = firstCoord[1];
	let letter = firstCoord[0];
for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function kingMoveForwardRightDiagonal(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function kingMoveForwardLeftDiagonal(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function kingMoveBackwardLeftDiagonal(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function kingMoveBackwardRightDiagonal(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}

};

function kingMoveForward(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = letter + num;
	return secondCoord;
};

function kingMoveBackward(coord) {
	const firstCoord = coord;
	let num = parseInt(firstCoord[1]) - 1;
	console.log()
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = letter + num;
	return secondCoord;
};




try {
console.log(pieces[5] + " " + kingMoveRight("E4"));
console.log(pieces[5] + " " + kingMoveBackward("E4"));
console.log(pieces[5] + " " + kingMoveForward("E4"));
console.log(pieces[5] + " " + kingMoveBackwardRightDiagonal("E4"));
console.log(pieces[5] + " " + kingMoveBackwardLeftDiagonal("E4"));
console.log(pieces[5] + " " + kingMoveForwardLeftDiagonal("E4"));
console.log(pieces[5] + " " + kingMoveForwardRightDiagonal("E4"));
console.log(pieces[5] + " " + kingMoveLeft("E4"));
console.log(pieces[4] + " " + queenMoveLeft("H1", 7));
console.log(pieces[4] + " " + queenMoveRight("A1", 7));
console.log(pieces[4] + " " + queenMoveBackward("A8", 7));
console.log(pieces[4] + " " + queenMoveForward("A1", 7));
console.log(pieces[4] + " " + queenMoveBackwardRightDiagonal("A1", 7));
console.log(pieces[4] + " " + queenMoveBackwardLeftDiagonal("E4", 3));
console.log(pieces[4] + " " + queenMoveForwardLeftDiagonal("B2", 1));
console.log(pieces[4] + " " + queenMoveForwardRightDiagonal("G2", 1));
console.log(pieces[3] + " " + rookMoveLeft("H1", 7));
console.log(pieces[3] + " " + rookMoveRight("A1", 7));
console.log(pieces[3] + " " + rookMoveBackward("A8", 7));
console.log(pieces[3] + " " + rookMoveForward("A1", 7));
console.log(pieces[0] + " " + twoPawnMoveForward("E2"));
// console.log(pieces[0] + " " + twoPawnMoveForward("E2"));
console.log(pieces[2] + " " + bishopMoveBackwardRightDiagonal("A1", 7));
console.log(pieces[2] + " " + bishopMoveBackwardLeftDiagonal("E4", 3));
console.log(pieces[2] + " " + bishopMoveForwardLeftDiagonal("B2", 1));
console.log(pieces[2] + " " + bishopMoveForwardRightDiagonal("G2", 1));
console.log(pieces[1] + " " + knightMoveTwoDownRight("E5"));
console.log(pieces[1] + " " + knightMoveTwoDownLeft("E5"));
console.log(pieces[1] + " " + knightMoveOneDownRight("E5"));
console.log(pieces[1] + " " + knightMoveOneDownLeft("E5"));
console.log(pieces[1] + " " + knightMoveOneForwardRight("A1"));
console.log(pieces[1] + " " + knightMoveOneForwardLeft("C1"));
console.log(pieces[1] + " " + knightMoveTwoForwardLeft("B1"));
console.log(pieces[1] + " " + knightMoveTwoForwardRight("B1"));
}

catch(err) {
	console.log(err);
}

