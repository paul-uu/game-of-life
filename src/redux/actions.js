import { TOGGLE_CELL, BOARD_STEP, RESET_BOARD, RANDOMIZE_BOARD } from '../constants';

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
	})
};

export default actions;