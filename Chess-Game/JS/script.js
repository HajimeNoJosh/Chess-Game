let origBoard = [
["BlR1","BlN1","BlB1","BlQ1","BlK1","BlB2","BlN2","BlR2"],
["BlP1","BlP2","BlP3","BlP4","BlP5","BlP6","BlP7","BlP8"],
["    ","    ","    ","    ","    ","    ","    ","    "],
["    ","    ","    ","    ","    ","    ","    ","    "],
["    ","    ","    ","    ","    ","    ","    ","    "],
["    ","    ","    ","    ","    ","    ","    ","    "],
["WhP1","WhP2","WhP3","WhP4","WhP5","WhP6","WhP7","WhP8"],
["WhR1","WhN1","WhB1","WhQ1","WhK1","WhB2","WhN2","WhR2"]
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


const lettersForwardRight = ["A", "B", "C", "D", "E", "F", "G", "H"]; //This comes in handy for changing the coorinates of moving pieces
const lettersForwardLeft = ["H", "G", "F", "E", "D", "C", "B", "A"]; //Same as previous but for pieces moving backwards, should be able to DRY by using only one array



function movePiece(firstCoord, secondCoord, checkingForPiece) {
	let aWord = getCoordForOrigBoard(firstCoord) 
	origBoard[aWord[1]][aWord[2]] = "    "
	let bWord = getSecondCoordForOrigBoard(secondCoord, aWord[0])
	origBoard[bWord[1]][bWord[2]] = aWord[0];
}; //This "moves the pieces". It takes the coordinates of the pieces intial position replaces it with blank and pastes the piece onto the new coordinates.

function getSecondCoordForOrigBoard(secondCoord, checkingForPiece) {
	for (i = 0; i < coordBoard.length; i++){
		for(j = 0; j < coordBoard[i].length; j++){
			if (secondCoord === coordBoard[i][j]){
				let firstBCoordPosition = String(i) 
				let secondBCoordPosition = String(j)
				return [checkingForPiece, firstBCoordPosition, secondBCoordPosition]
			} 
		} 
	}
}; //This takes the secondCoord, which is found by applying the function movement and coming out with new coordinates. It then loops through the CoordBoard based off the secondCoord and finds it position.

function checkingForPiecesAtDestination(color, secondCoord, pieceType) {
	let coordPositions = getSecondCoordForOrigBoard(secondCoord)
	let checkingForPieceColor = origBoard[coordPositions[1]][coordPositions[2]]
	if(checkingForPieceColor[0] === color) {
		throw "Invalid Move"
	} 
}; //This is to find out whether there is a piece at the target desination that matches the same color


function getCoordForOrigBoard(firstCoord) {
	for (i = 0; i < coordBoard.length; i++) {
		for(j = 0; j < coordBoard[i].length; j++) {
			if (firstCoord === coordBoard[i][j]) {
				let firstACoordPosition = String(i); 
				let secondACoordPosition = String(j);
				let checkingForPiece = origBoard[firstACoordPosition][secondACoordPosition]
				return [checkingForPiece, firstACoordPosition, secondACoordPosition]
			}
		}
	}
}; //This takes the first coordinate defined by the Object pieces (which is also updated throughout). It finds its position on the coordBoard and finds its position on the origBoard, returning all of this information.

// The next several functions check for pieces that can be found along a pieces "path". It takes its starting position, and based off the movement of the piece will add subtract array coords and do a check for the color of said pieces.

function checkingForPiecesAlongPathToDestinationRightForwardDiagonal(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1]) - i][parseInt(firstCoordPosition[2]) + i]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
}; 


function checkingForPiecesAlongPathToDestinationRightBackwardDiagonal(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1]) + i][parseInt(firstCoordPosition[2]) + i]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
};

function checkingForPiecesAlongPathToDestinationLeftForwardDiagonal(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1]) - i][parseInt(firstCoordPosition[2]) - i]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
};

function checkingForPiecesAlongPathToDestinationLeftBackwardDiagonal(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1]) + i][parseInt(firstCoordPosition[2]) - i]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
};

function checkingForPiecesAlongPathToDestinationRightForward(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1])][parseInt(firstCoordPosition[2]) + i]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
};


function checkingForPiecesAlongPathToDestinationRightBackward(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1])][parseInt(firstCoordPosition[2]) - i]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
};

function checkingForPiecesAlongPathToDestinationUpForward(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1]) - i][parseInt(firstCoordPosition[2])]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
};

function checkingForPiecesAlongPathToDestinationUpBackward(color, firstCoord, numberOfMoves) {
	let firstCoordPosition = getCoordForOrigBoard(firstCoord)
	for(i = 1; i < numberOfMoves; i++){
		let checkingForPieceColor = origBoard[parseInt(firstCoordPosition[1]) + i][parseInt(firstCoordPosition[2])]
		if(checkingForPieceColor[0] === color) {
			throw "Invalid Move"
		}
	}
};
// This is the end of checking for pieces along the "path"

function checkingCoordsNum(num, secondCoord) {
	if (num > 8 || num < 1) {
		throw "Invalid Move"
	} else {
		return secondCoord
	}
}; // This function checks to make sure that the number is within the confines of the board. In other words it creates boundaries. 

// The next four functions are for movement. They create letters based off letter arrays above.
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

// function numbersForLetters(numberOfMoves){
// 	let arrayNumberOfMoves = [];
// 	for(i = 1; i <= numberOfMoves; i++){
// 		arrayNumberOfMoves.push(i)
// 	}
// 	return arrayNumberOfMoves
// }; //I do not remember why I have this function. Lets see if its useful.


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


//pawns cannot take pieces going forward. Need to add that at some point
let allPieces = {

	"WhP1": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "A2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhP2": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "B2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhP3": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "C2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhP4": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "D2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color, secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhP5": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "E2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhP6": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "F2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhP7": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "G2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhP8": {
		color: "W",
		pieceType: "pawn",
		currentCoord: "H2",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"WhN1": {
		color: "W",
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhN2": {
		color: "W",
		pieceType: "knight",
		currentCoord: "G1",
		knightMoveTwoForwardRight: function () {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterOneForward(letter, num)
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"WhB1": {
		color: "W",
		pieceType: "bishop",
		currentCoord: "C1",
		bishopMoveForwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveForwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhB2": {
		color: "W",
		pieceType: "bishop",
		currentCoord: "F1",
		bishopMoveForwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveForwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhR1": {
		color: "W",
		pieceType: "rook",
		currentCoord: "A1",
		rookMoveForward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},


		rookMoveBackward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveRight: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveLeft: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"WhR2": {
		color: "W",
		pieceType: "rook",
		currentCoord: "H1",
		rookMoveForward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},


		rookMoveBackward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveRight: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveLeft: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"WhQ1": {
		color: "W",
		pieceType: "queen",
		currentCoord: "D1",
		queenMoveLeft: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveRight: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveForwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveForwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveBackwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveBackwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveForward: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},


		queenMoveBackward: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"WhK1": {
		color: "W",
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"BlP1": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "A7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlP2": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "B7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlP3": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "C7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlP4": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "D7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlP5": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "E7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlP6": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "F7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlP7": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "G7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlP8": {
		color: "B",
		pieceType: "pawn",
		currentCoord: "H7",
		oneMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece);
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		twoPawnMoveForward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		oneMoveBackward: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - 1;
			let secondCoord = firstCoord[0] + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord, this.pieceType)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"BlN1": {
		color: "B",
		pieceType: "knight",
		currentCoord: "B8",
		knightMoveTwoForwardRight: function () {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterOneForward(letter, num)
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlN2": {
		color: "B",
		pieceType: "knight",
		currentCoord: "G8",
		knightMoveTwoForwardRight: function () {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + 2;
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterOneForward(letter, num)
			checkingCoordsNum(num, secondCoord)
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"BlB1": {
		color: "B",
		pieceType: "bishop",
		currentCoord: "C8",
		bishopMoveForwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveForwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlB2": {
		color: "B",
		pieceType: "bishop",
		currentCoord: "F8",
		bishopMoveForwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveForwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		bishopMoveBackwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlR1": {
		color: "B",
		pieceType: "rook",
		currentCoord: "A8",
		rookMoveForward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},


		rookMoveBackward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveRight: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveLeft: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},
	"BlR2": {
		color: "B",
		pieceType: "rook",
		currentCoord: "H8",
		rookMoveForward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},


		rookMoveBackward: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveRight: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		rookMoveLeft: function (numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"BlQ1": {
		color: "B",
		pieceType: "queen",
		currentCoord: "D8",
		queenMoveLeft: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveRight: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveForwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveForwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftForwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveBackwardLeftDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationLeftBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXBackward(letter, num, numberOfMoves);
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveBackwardRightDiagonal: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationRightBackwardDiagonal(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterXForward (letter, num, numberOfMoves)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},

		queenMoveForward: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpForward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) + numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		},


		queenMoveBackward: function(numberOfMoves) {
			const firstCoord = this.currentCoord;
			checkingForPiecesAlongPathToDestinationUpBackward(this.color, firstCoord, numberOfMoves)
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = parseInt(firstCoord[1]) - numberOfMoves;
			num = Math.abs(num);
			let letter = firstCoord[0];
			let secondCoord = letter + num;
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

	"BlK1": {
		color: "B",
		pieceType: "king",
		currentCoord: "E8",
		kingMoveLeft: function() {
			const firstCoord = this.currentCoord;
			let checkingForPiece = 	getCoordForOrigBoard(firstCoord);
			let num = firstCoord[1];
			let letter = firstCoord[0];
			let secondCoord = makeNewLetterOneBackward(letter, num)
			checkingCoordsNum(num, secondCoord);
			getSecondCoordForOrigBoard(secondCoord, checkingForPiece)
			this.currentCoord = secondCoord;
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
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
			checkingForPiecesAtDestination(this.color,secondCoord)
			movePiece(firstCoord, secondCoord, checkingForPiece)
			return [firstCoord, this.currentCoord]
		}
	},

};


try {
	// console.log(allPieces["BlP5"].twoPawnMoveBackward())
	// console.log(allPieces["BlP6"].oneMoveBackward())
	// console.log(allPieces["BlQ1"].queenMoveBackwardRightDiagonal(2))
	// console.log(allPieces["BlP6"].twoPawnMoveForward())
	// console.log(allPieces["WhP5"].oneMoveForward())
	// console.log(allPieces["WhP4"].twoPawnMoveForward())
	// console.log(allPieces["WhP6"].twoPawnMoveForward())
	// console.log(allPieces["WhB1"].bishopMoveForwardRightDiagonal(4))
}

catch(err) {
	console.log(err);
}

