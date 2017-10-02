import { TOGGLE_CELL, BOARD_STEP, RESET_BOARD, RANDOMIZE_BOARD } from '../constants';

const actions = {

    toggleCell: (row, col, updateTo) => {
        return {
            type: TOGGLE_CELL,
            row,
            col,
            updateTo
        }
    },
    boardStep: () => {
        return {
            type: BOARD_STEP
        }
    },
    resetBoard: (size, cellValue) => {
        return {
            type: RESET_BOARD,
            size,
            cellValue
        }
    },
    randomizeBoard: () => {
        return {
            type: RANDOMIZE_BOARD
        }
    }
};

export default actions;