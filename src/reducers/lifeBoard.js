import { BOARD_SIZE, TOGGLE_CELL, BOARD_STEP, RESET_BOARD, RANDOMIZE_BOARD } from '../constants';

function lifeBoard(state = [], action) {
	switch (action.type) {

		case TOGGLE_CELL:
      let updatedState = new Array(...state);
			updatedState[action.row][action.col] = action.updateTo;
			return updatedState;

		case BOARD_STEP:
			let current = state;
			return current.map((row, rowIndex) => {
				return row.map((isAlive, colIndex) => {
					let topLeft     = getNeighborStatus(current, rowIndex - 1, colIndex - 1),
							top         = getNeighborStatus(current, rowIndex - 1, colIndex),
							topRight    = getNeighborStatus(current, rowIndex - 1, colIndex + 1),
							left        = getNeighborStatus(current, rowIndex, colIndex - 1),
							right       = getNeighborStatus(current, rowIndex, colIndex + 1),
							bottomLeft  = getNeighborStatus(current, rowIndex + 1, colIndex - 1),
							bottom      = getNeighborStatus(current, rowIndex + 1, colIndex),
							bottomRight = getNeighborStatus(current, rowIndex + 1, colIndex + 1);

					let neighborStatuses = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight],
							aliveNeighborsQty = neighborStatuses.filter(status => status === true).length;

					if (isAlive) {
						if (aliveNeighborsQty < 2 || aliveNeighborsQty > 3)
							return false;
						else
							return true;
					}
					else {
						if (aliveNeighborsQty === 3) 
							return true;
					}
					return false;
				})
			});

    case RESET_BOARD:
      console.log('reset board');
			return generateBoard(action.size, action.cellValue);

		case RANDOMIZE_BOARD:
			return generateBoard(BOARD_SIZE);

		default:
			return state;
	}
}

function generateBoard(size, cellValue) {
	let newBoard = [];
	for (let i = 0; i < size; i++) {
		newBoard[i] = [];
		for (let j = 0; j < size; j++) {
			newBoard[i][j] = cellValue === undefined ? Math.random() >= 0.5 : false;
		}
	}
	return newBoard;
}
function getNeighborStatus(board, rowIndex, colIndex) {
  if (rowIndex < 0 || rowIndex >= BOARD_SIZE || colIndex < 0 || colIndex >= BOARD_SIZE)
    return false;
  return board[rowIndex][colIndex]
}

export default lifeBoard;