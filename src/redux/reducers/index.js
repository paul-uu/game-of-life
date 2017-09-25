import { combineReducers } from 'redux';

function updateBoard(state = [], action) {
    switch (action.type) {

        case 'TOGGLE_CELL':
            console.log(action);
            return state;

        case 'BOARD_STEP':
            console.log(action);
            return state;

        case 'RESET_BOARD':
        console.log(action);
            return resetBoardState(action.size);

        default:
            return state;
    }
}

function resetBoardState(size) {
    let newBoard = [];
    for (let i = 0; i < size; i++) {
        newBoard[i] = [];
        for (let j = 0; j < size; j++) {
          newBoard[i][j] = false;
        }
      }
      return newBoard;
}

const rootReducer = combineReducers({
    updateBoard
});

export default rootReducer;