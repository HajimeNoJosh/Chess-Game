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
	for (i = 0; i < coordBoard.length; i++) {
		for(j = 0; j < coordBoard[i].length; j++) {
			if (firstCoord === coordBoard[i][j]) {
				let firstCoordPosition = String(i); 
				let secondCoordPosition = String(j);
				let checkingForPiece = origBoard[firstCoordPosition][secondCoordPosition];
				let pieceBeginningLetter = checkingForPiece[0];

				if (checkingForPiece === "BlR" || "BlN" || "BlB" || "BlQ" || "BlK" || "BlP" || "WhP" || "WhR" || "WhN" || "WhB" || "WhK" || "WhQ"){
					origBoard[firstCoordPosition][secondCoordPosition] = "   "
				} else {
					throw "Invalid Move"
				};
				return checkingForPiece
				return pieceBeginningLetter
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

let pawnWhiteOne = {
	color: "white",
	pieceType: "pawn",
	currentCoord: "E3",
	oneMoveForward: function()  {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 1;
		let secondCoord = firstCoord[0] + num;
		let pieceBeginningLetter = checkingForPiece[0];
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	twoPawnMoveForward: function()  {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 2;
		let secondCoord = firstCoord[0] + num;
		checkingCoordsNum(num, secondCoord)
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	oneMoveBackward: function()  {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 1;
		let secondCoord = firstCoord[0] + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	twoPawnMoveBackward: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 2;
		let secondCoord = firstCoord[0] + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	}
};

let knightWhiteOne = {
	color: "white",
	pieceType: "knight",
	currentCoord: "B1",
	knightMoveTwoForwardRight: function () {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 2;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneForward(letter, num)
		checkingCoordsNum(num, secondCoord)
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord
		return [firstCoord, this.currentCoord]
	},
	knightMoveTwoForwardLeft: function () {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 2;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneBackward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},
	knightMoveOneForwardLeft: function () {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 1;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterTwoBackward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},
	knightMoveOneForwardRight: function () {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 1;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterTwoFoward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},
	knightMoveOneDownLeft: function () {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 1;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterTwoBackward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},
	knightMoveOneDownRight: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 1;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterTwoFoward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},
	knightMoveTwoDownRight: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 2;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneForward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},
	knightMoveTwoDownLeft: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 2;
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneBackward(letter, num);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	}
};

let whiteBishopOne = {
	color: "white",
	pieceType: "bishop",
	currentCoord: "C1",
	bishopMoveForwardRightDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	bishopMoveForwardLeftDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	bishopMoveBackwardLeftDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	bishopMoveBackwardRightDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	}
};

let whiteRookOne = {
	color: "white",
	pieceType: "rook",
	currentCoord: "A1",
	rookMoveForward: function (numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = letter + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},


	rookMoveBackward: function (numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - numberOfMoves;
		console.log()
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = letter + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	rookMoveRight: function (numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = firstCoord[1];
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	rookMoveLeft: function (numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = firstCoord[1];
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	}
};

let whiteQueen = {
	color: "white",
	pieceType: "queen",
	currentCoord: "D1",
	queenMoveLeft: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = firstCoord[1];
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	queenMoveRight: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = firstCoord[1];
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	queenMoveForwardRightDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	queenMoveForwardLeftDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	queenMoveBackwardLeftDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	queenMoveBackwardRightDiagonal: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	queenMoveForward: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = letter + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},


	queenMoveBackward: function(numberOfMoves) {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - numberOfMoves;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = letter + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	}
};

let whiteKing = {
	color: "white",
	pieceType: "king",
	currentCoord: "E1",
	kingMoveLeft: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = firstCoord[1];
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneBackward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	kingMoveRight: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = firstCoord[1];
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneForward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	kingMoveForwardRightDiagonal: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 1;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneForward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	kingMoveForwardLeftDiagonal: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 1;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneBackward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	kingMoveBackwardLeftDiagonal: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 1;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneBackward(letter, num)
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	kingMoveBackwardRightDiagonal: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 1;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = makeNewLetterOneForward(letter, num);
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	kingMoveForward: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) + 1;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = letter + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	},

	kingMoveBackward: function() {
		const firstCoord = this.currentCoord;
		let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
		let num = parseInt(firstCoord[1]) - 1;
		num = Math.abs(num);
		let letter = firstCoord[0];
		let secondCoord = letter + num;
		checkingCoordsNum(num, secondCoord);
		getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
		this.currentCoord = secondCoord;
		return [firstCoord, this.currentCoord]
	}
}



try {
	
}

catch(err) {
	console.log(err);
}

