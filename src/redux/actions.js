import { 
	TOGGLE_CELL, 
	BOARD_STEP, 
	RESET_BOARD, 
	RANDOMIZE_BOARD,
	UNDO,
	REDO
} from '../constants';

const actions = {
	toggleCell: (row, col, updateTo) => ({
		type: TOGGLE_CELL,
		row,
		col,
		updateTo
	}),
	boardStep: () => ({
		type: BOARD_STEP
	}),
	resetBoard: (size, cellValue) => ({
		type: RESET_BOARD,
		size,
		cellValue
	}),
	randomizeBoard: () => ({
		type: RANDOMIZE_BOARD
	}),

	undo: () => ({
		type: UNDO
	}),
	redo: () => ({
		type: REDO
	})

};

export default actions;