let origBoard = [
["R","N","B","Q","K","B","N","R"],
["P","P","P","P","P","P","P","P"],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
["P","P","P","P","P","P","P","P"],
["R","N","B","Q","K","B","N","R"]
];

let coordBoard = [
["A8","B8","C8","D8","E8","F8","G8","H8"],
["A7","B7","C7","D7","E7","F7","G7","H7"],
["A6","B6","C6","D6","E6","F6","G6","H6"],
["A5","B5","C5","D5","E5","F5","G5","H5"],
["A4","B4","C4","D4","E4","F4","G4","H4"],
["A3","B3","C3","D3","E3","F3","G3","H3"],
["A2","B2","C2","D2","E2","F2","G2","H2"],
["A1","B1","C1","D1","E1","F1","G1","H1"],
]
// a - h bottom row
// 1 - 8 sides

console.log(origBoard)

let pieces = ["pawn", "knight", "bishop", "rook", "queen", "king"];

const lettersForwardRight = ["A", "B", "C", "D", "E", "F", "G", "H"];
const lettersForwardLeft = ["H", "G", "F", "E", "D", "C", "B", "A"];

function getCoordForOrigBoard(firstCoord) {
	for (i = 0; i < coordBoard.length; i++){
		for(j = 0; j < coordBoard[i].length; j++){
			if (firstCoord === coordBoard[i][j]){
				let firstCoordPosition = String(i) 
				let secondCoordPosition = String(j)
				let checkingForPiece = origBoard[firstCoordPosition][secondCoordPosition]
				if (checkingForPiece === "R" || "N" || "B" || "Q" || "K" || "P"){
					origBoard[firstCoordPosition][secondCoordPosition] = " "
				} else {
					throw "Invalid Move"
				}
				return checkingForPiece
			}
		}
	}
};

function getSecondCoordForOrigBoard(secondCoord, checkingForPiece){
	for (i = 0; i < coordBoard.length; i++){
		for(j = 0; j < coordBoard[i].length; j++){
			if (secondCoord === coordBoard[i][j]){
				let firstCoordPosition = String(i) 
				let secondCoordPosition = String(j)
				origBoard[firstCoordPosition][secondCoordPosition] = checkingForPiece;
			} 
		} 
	}
};

function checkingCoordsNum(num, secondCoord) {
	if (num > 8 || num < 1) {
		throw "Invalid Move"
	} else {
		return secondCoord
	}
};





function oneMoveForward(coord)  {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	let secondCoord = firstCoord[0] + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece);

};


function twoPawnMoveForward(coord)  {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 2;
	let secondCoord = firstCoord[0] + num;
	checkingCoordsNum(num, secondCoord)
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};

function oneMoveBackward(coord)  {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	let secondCoord = firstCoord[0] + num;
	checkingCoordsNum(num, secondCoord);

	for (i = 0; i < coordBoard.length; i++){
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)

	}
};

function twoPawnMoveBackward(coord)  {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 2;
	let secondCoord = firstCoord[0] + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}





function knightMoveTwoForwardRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 2;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}


function knightMoveTwoForwardLeft(coord) { 
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 2;
	let letter = firstCoord[0];
	if (num > 8 || num < 1) {
		throw "Invalid Move"
	} else {
		for (i = 0; i < lettersForwardRight.length; i++) {
			if (letter === lettersForwardRight[i]) {
				let newLetter = i - 1;
				let letter = lettersForwardRight[newLetter];
				let secondCoord = letter + num;
				checkingCoordsNum(num, secondCoord);
				getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
				return secondCoord;
			}
		}
	}
}


function knightMoveOneForwardLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i - 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
};


function knightMoveOneForwardRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)

			return secondCoord;
		}
	}
}


function knightMoveOneDownLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i - 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}


function knightMoveOneDownRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;

		}
	}
}


function knightMoveTwoDownRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 2;

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}


function knightMoveTwoDownLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 2;

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i - 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}





function bishopMoveForwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function bishopMoveForwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function bishopMoveBackwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function bishopMoveBackwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}


function rookMoveForward(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];
	let secondCoord = letter + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	checkingCoordsNum()
	return secondCoord
}


function rookMoveBackward(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	console.log()
	num = Math.abs(num);

	let letter = firstCoord[0];
	let secondCoord = letter + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	checkingCoordsNum()
	return secondCoord
}


function rookMoveRight(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}




function rookMoveLeft(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function queenMoveLeft(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];

	let letter = firstCoord[0];
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function queenMoveRight(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function queenMoveForwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function queenMoveForwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function queenMoveBackwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function queenMoveBackwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function queenMoveForward(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];
	let secondCoord = letter + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord
}


function queenMoveBackward(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);

	let letter = firstCoord[0];
	let secondCoord = letter + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord
}


function kingMoveLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 1
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}


function kingMoveRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function kingMoveForwardRightDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function kingMoveForwardLeftDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);
	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}


function kingMoveBackwardLeftDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}


function kingMoveBackwardRightDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	num = Math.abs(num);

	let letter = firstCoord[0];

	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			return secondCoord;
		}
	}
}



function kingMoveForward(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);

	let letter = firstCoord[0];
	let secondCoord = letter + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord
}


function kingMoveBackward(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = letter + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord
};




try {
	console.log(pieces[0] + " " + twoPawnMoveForward("E2"));
	console.log(pieces[0] + " " + twoPawnMoveBackward("E7"));
	console.log(pieces[1] + " " + knightMoveTwoForwardLeft("G1"));
	console.log(pieces[1] + " " + knightMoveTwoDownRight("B8"));
	console.log(pieces[2] + " " + bishopMoveForwardLeftDiagonal("F1", 4));
	console.log(pieces[1] + " " + knightMoveTwoDownLeft("G8"));
	console.log(pieces[5] + " " + kingMoveRight("E8"));
	// console.log(pieces[5] + " " + kingMoveBackward("E2"));
	// console.log(pieces[5] + " " + kingMoveForward("E7"));
	// console.log(pieces[5] + " " + kingMoveBackwardRightDiagonal("E4"));
	// console.log(pieces[5] + " " + kingMoveBackwardLeftDiagonal("E4"));
	// console.log(pieces[5] + " " + kingMoveForwardLeftDiagonal("E4"));
	// console.log(pieces[5] + " " + kingMoveForwardRightDiagonal("E4"));
	// console.log(pieces[5] + " " + kingMoveLeft("E4"));
	// console.log(pieces[4] + " " + queenMoveLeft("H1", 7));
	// console.log(pieces[4] + " " + queenMoveRight("A1", 7));
	// console.log(pieces[4] + " " + queenMoveBackward("A8", 7));
	// console.log(pieces[4] + " " + queenMoveForward("A1", 7));
	// console.log(pieces[4] + " " + queenMoveBackwardRightDiagonal("A1", 7));
	// console.log(pieces[4] + " " + queenMoveBackwardLeftDiagonal("E4", 3));
	// console.log(pieces[4] + " " + queenMoveForwardLeftDiagonal("B2", 1));
	// console.log(pieces[4] + " " + queenMoveForwardRightDiagonal("G2", 1));
	// console.log(pieces[3] + " " + rookMoveLeft("H1", 7));
	// console.log(pieces[3] + " " + rookMoveRight("A1", 7));
	// console.log(pieces[3] + " " + rookMoveBackward("A8", 7));
	// console.log(pieces[3] + " " + rookMoveForward("A1", 7));
	// console.log(pieces[2] + " " + bishopMoveBackwardRightDiagonal("A1", 7));
	// console.log(pieces[2] + " " + bishopMoveBackwardLeftDiagonal("E4", 3));
	// console.log(pieces[2] + " " + bishopMoveForwardLeftDiagonal("B2", 1));
	// console.log(pieces[2] + " " + bishopMoveForwardRightDiagonal("G2", 1));
	// console.log(pieces[1] + " " + knightMoveTwoDownRight("E5"));
	// console.log(pieces[1] + " " + knightMoveTwoDownLeft("E5"));
	// console.log(pieces[1] + " " + knightMoveOneDownRight("E5"));
	// console.log(pieces[1] + " " + knightMoveOneDownLeft("E5"));
	// console.log(pieces[1] + " " + knightMoveOneForwardRight("A1"));
	// console.log(pieces[1] + " " + knightMoveOneForwardLeft("C1"));
	//  console.log(pieces[1] + " " + knightMoveTwoForwardLeft("G1"));
	// console.log(pieces[1] + " " + knightMoveTwoForwardRight("A1"));
	// console.log(pieces[0] + " " + twoPawnMoveForward("E2"));
	 // console.log(pieces[0] + " " + oneMoveForward("E2"));
	 // console.log(pieces[0] + " " + twoPawnMoveForward("E2"));
	}

	catch(err) {
		console.log(err);
	}

