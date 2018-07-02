import { BOARD_SIZE } from '../constants';

function undoable(reducer) {

  const initialState = {
    past: [],
    present: reducer( generateBoard(BOARD_SIZE, false), {} ),
    future: []
  }

  return function(state = initialState, action) {
    const { past, present, future } = state;
    switch (action.type) {

      case 'UNDO':
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        }
      case 'REDO':
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        }
      default:
        const newPresent = reducer(present, action);
        if (present === newPresent)
          return state;

        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
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


export default undoable;