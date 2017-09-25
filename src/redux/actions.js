const actions = {

    toggleCell: cell => {
        return {
            type: 'TOGGLE_CELL',
            cell
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