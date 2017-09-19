import { combineReducers } from 'redux';

function updateBoard(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    updateBoard
});

export default rootReducer;