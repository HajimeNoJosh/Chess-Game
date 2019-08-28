let origBoard = [
["BlR","BlN","BlB","BlQ","BlK","BlB","BlN","BlR"],
["BlP","BlP","BlP","BlP","BlP","BlP","BlP","BlP"],
["   ","   ","   ","   ","   ","   ","   ","   "],
["   ","   ","   ","   ","   ","   ","   ","   "],
["   ","   ","   ","   ","   ","   ","   ","   "],
["   ","   ","   ","   ","   ","   ","   ","   "],
["WhP","WhP","WhP","WhP","WhP","WhP","WhP","WhP"],
["WhR","WhN","WhB","WhQ","WhK","WhB","WhN","WhR"]
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
];

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
				let firstCoordPosition = String(i); 
				let secondCoordPosition = String(j);
				let checkingForPiece = origBoard[firstCoordPosition][secondCoordPosition];
				if (checkingForPiece === "BlR" || "BlN" || "BlB" || "BlQ" || "BlK" || "BlP" || "WhP" || "WhR" || "WhN" || "WhB" || "WhK" || "WhQ"){
					origBoard[firstCoordPosition][secondCoordPosition] = " "
				} else {
					throw "Invalid Move"
				};
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

function makeNewLetterOneForward(letter, num) {
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord
		}
	}
};

function makeNewLetterOneBackward(letter, num) {
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 1;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord
		}
	}
};

function makeNewLetterTwoFoward(letter, num) {
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + 2;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord
		}
	}
};

function makeNewLetterTwoBackward(letter, num) {
	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + 2;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord
		}
	}
};

function makeNewLetterXForward (letter, num, numberOfMoves) {
	for (i = 0; i < lettersForwardRight.length; i++) {
		if (letter === lettersForwardRight[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardRight[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function makeNewLetterXBackward(letter, num, numberOfMoves) {

	for (i = 0; i < lettersForwardLeft.length; i++) {
		if (letter === lettersForwardLeft[i]) {
			let newLetter = i + numberOfMoves;
			let letter = lettersForwardLeft[newLetter];
			let secondCoord = letter + num;
			return secondCoord;
		}
	}
};

function oneMoveForward(coord)  {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	let secondCoord = firstCoord[0] + num;
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
	return secondCoord
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
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord

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
	let secondCoord = makeNewLetterOneForward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}



function knightMoveTwoForwardLeft(coord) { 
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 2;
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneBackward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}



function knightMoveOneForwardLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterTwoBackward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};


function knightMoveOneForwardRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterTwoFoward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)

	return secondCoord;
}



function knightMoveOneDownLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterTwoBackward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};


function knightMoveOneDownRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterTwoFoward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;

}


function knightMoveTwoDownRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 2;
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneForward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};


function knightMoveTwoDownLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 2;
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneBackward(letter, num);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};





function bishopMoveForwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}




function bishopMoveForwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}




function bishopMoveBackwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}



function bishopMoveBackwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
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
	let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}




function rookMoveLeft(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}




function queenMoveLeft(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};



function queenMoveRight(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}




function queenMoveForwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
}



function queenMoveForwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};




function queenMoveBackwardLeftDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};


function queenMoveBackwardRightDiagonal(coord, numberOfMoves) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - numberOfMoves;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};

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
};


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
};


function kingMoveLeft(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneBackward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};


function kingMoveRight(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = firstCoord[1];
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneForward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};

function kingMoveForwardRightDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneForward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};



function kingMoveForwardLeftDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) + 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneBackward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};


function kingMoveBackwardLeftDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneBackward(letter, num)
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};


function kingMoveBackwardRightDiagonal(coord) {
	const firstCoord = coord;
	let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
	let num = parseInt(firstCoord[1]) - 1;
	num = Math.abs(num);
	let letter = firstCoord[0];
	let secondCoord = makeNewLetterOneForward(letter, num);
	checkingCoordsNum(num, secondCoord);
	getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
	return secondCoord;
};

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
};


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
	// console.log(pieces[0] + " " + twoPawnMoveForward("E2")); //E4
	// console.log(pieces[0] + " " + oneMoveBackward("E2")); //E1
	// console.log(pieces[1] + " " + knightMoveTwoForwardLeft("E2")); //D4
	// console.log(pieces[1] + " " + knightMoveTwoDownRight("B8")); //C6
	// console.log(pieces[2] + " " + bishopMoveForwardLeftDiagonal("E2", 4)); //A6
	// console.log(pieces[1] + " " + knightMoveTwoDownLeft("B8")); //A6
	// console.log(pieces[5] + " " + kingMoveRight("E2")); //F2
	// console.log(pieces[1] + " " + knightMoveTwoForwardRight("E2")); //F4
	// console.log(pieces[5] + " " + kingMoveBackward("E2")); //E1
	// console.log(pieces[5] + " " + kingMoveForward("E2")); //E3
	// console.log(pieces[5] + " " + kingMoveBackwardRightDiagonal("E2")); //F1
	// console.log(pieces[5] + " " + kingMoveBackwardLeftDiagonal("E2")); //D1
	// console.log(pieces[5] + " " + kingMoveForwardLeftDiagonal("E2")); //D3
	// console.log(pieces[5] + " " + kingMoveForwardRightDiagonal("E2")); //F3
	// console.log(pieces[5] + " " + kingMoveLeft("E2")); //D2
	// console.log(pieces[4] + " " + queenMoveLeft("E2", 2)); //C2
	// console.log(pieces[4] + " " + queenMoveRight("E2", 2)); //G2
	// console.log(pieces[4] + " " + queenMoveBackward("E8", 2)); //E6
	// console.log(pieces[4] + " " + queenMoveForward("E2", 2)); //E4
	// console.log(pieces[4] + " " + queenMoveBackwardRightDiagonal("E8", 2)); //G6
	// console.log(pieces[4] + " " + queenMoveBackwardLeftDiagonal("E8", 2)); //C6
	// console.log(pieces[4] + " " + queenMoveForwardLeftDiagonal("E2", 1)); //C3
	// console.log(pieces[4] + " " + queenMoveForwardRightDiagonal("E2", 1)); //F3
	// console.log(pieces[3] + " " + rookMoveLeft("E2", 2)); //C2
	// console.log(pieces[3] + " " + rookMoveRight("E2", 2)); //G2
	// console.log(pieces[3] + " " + rookMoveBackward("E8", 2)); //E6
	// console.log(pieces[3] + " " + rookMoveForward("E2", 2)); //E4
	// console.log(pieces[2] + " " + bishopMoveBackwardRightDiagonal("E8", 2)); //G6
	// console.log(pieces[2] + " " + bishopMoveBackwardLeftDiagonal("E8", 2)); //C6
	// console.log(pieces[2] + " " + bishopMoveForwardLeftDiagonal("E2", 1)); //D3
	// console.log(pieces[2] + " " + bishopMoveForwardRightDiagonal("E2", 1)); //F3
	// console.log(pieces[1] + " " + knightMoveTwoDownRight("E8")); //F6
	// console.log(pieces[1] + " " + knightMoveTwoDownLeft("E8")); //D6
	// console.log(pieces[1] + " " + knightMoveOneDownRight("E8")); //G7
	// console.log(pieces[1] + " " + knightMoveOneDownLeft("E8")); //C7
	// console.log(pieces[1] + " " + knightMoveOneForwardRight("E2")); //G3
	// console.log(pieces[1] + " " + knightMoveOneForwardLeft("E2")); //C3
	// console.log(pieces[1] + " " + knightMoveTwoForwardLeft("E2")); //D4
	// console.log(pieces[0] + " " + twoPawnMoveForward("E2")); //E4
	// console.log(pieces[0] + " " + oneMoveForward("E2")); //E3
	}

	catch(err) {
		console.log(err);
	}

