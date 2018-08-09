import actions from './actions';
import {
  TOGGLE_CELL, BOARD_STEP, RESET_BOARD, RANDOMIZE_BOARD, UNDO, REDO, BOARD_SIZE
} from './constants';

it('should create an action to toggle a cell', () => {
  const row = 1, col = 1, isAlive = true;
  const expectedToggleCellAction = {
    type: TOGGLE_CELL,
    row, col, updateTo: !isAlive
  };
  expect(
    JSON.stringify(actions.toggleCell(row, col, isAlive))
  )
  .toBe(
    JSON.stringify(expectedToggleCellAction)
  );
});

it('should create an action to calculate the next step on the board', () => {
  const expectedBoardStepAction = { type: BOARD_STEP };
  expect(JSON.stringify(actions.boardStep()))
  .toBe(JSON.stringify(expectedBoardStepAction));
});

it('should create an action to reset the board', () => {
  const size = BOARD_SIZE;
  const cellValue = false;
  const expectedResetBoardAction = {
    type: RESET_BOARD,
    size,
    cellValue
  };
  expect(
    JSON.stringify(actions.resetBoard(size, cellValue))
  )
  .toBe(
    JSON.stringify(expectedResetBoardAction)
  );
});

it('should create an action to randomize the board', () => {
  const exptectedRandomizeBoardAction = { type: RANDOMIZE_BOARD };
  expect(JSON.stringify(actions.randomizeBoard()))
  .toBe(JSON.stringify(exptectedRandomizeBoardAction));
});

it('should create and action to undo the last action', () => {
  const expectedUndoAction = { type: UNDO };
  expect(JSON.stringify(actions.undo()))
  .toBe(JSON.stringify(expectedUndoAction));
});

it('should create and action to redo the last action', () => {
  const expectedRedoAction = { type: REDO };
  expect(JSON.stringify(actions.redo()))
  .toBe(JSON.stringify(expectedRedoAction));
});