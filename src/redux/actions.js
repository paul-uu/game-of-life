const actions = {

    toggleCell: (row, col, updateTo) => {
        return {
            type: 'TOGGLE_CELL',
            row,
            col,
            updateTo
        }
    },
    boardStep: () => {
        return {
            type: 'BOARD_STEP'
        }
    },
    resetBoard: size => {
        return {
            type: 'RESET_BOARD',
            size
        }
    }
};

export default actions;