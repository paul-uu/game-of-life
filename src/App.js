import React, { Component } from 'react';
import { connect } from 'react-redux';
import LifeBoardContainer from './containers/LifeBoardContainer';
import Button from './components/button';
import UndoButton from './containers/UndoButton';
import RedoButton from './containers/RedoButton';
import store from './store';
import actions from './actions';
import './App.css';
import { BOARD_SIZE } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
  }

  evaluateBoard() {
    this.props.dispatch(actions.boardStep());
  }
  clearBoard() {
    this.props.dispatch(actions.resetBoard(BOARD_SIZE, false));
  }
  randomizeBoard() {
    this.props.dispatch(actions.randomizeBoard());
  }

  render() {
    return (
      <div className='App'>
        <h2>Conway's Game of Life</h2>

        <LifeBoardContainer />
        <Button onClick={this.randomizeBoard.bind(this)} text={'Randomize'} />
        <Button onClick={this.evaluateBoard.bind(this)} text={'Step'} />
        <Button onClick={this.clearBoard.bind(this)} text={'Reset'} />
        <UndoButton text={'UNDO'} />
        <RedoButton text={'REDO'} />

      </div>
    );
  }
}

export default connect()(App);