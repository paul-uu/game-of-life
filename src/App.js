import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/board';
import Button from './components/button';
import store from './redux/store';
import actions from './redux/actions';
import './App.css';

const BOARD_SIZE = 30;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: []
    }
  }

  componentDidMount() {
    store.dispatch(actions.resetBoard(BOARD_SIZE));
  }

  toggleCell(row, col) {
    let board = this.props.updateBoard;
    let updatedState = board[row][col] ? false : true;
    store.dispatch( actions.toggleCell( row, col, updatedState ) );
  }
  evaluateBoard() {
    store.dispatch(actions.boardStep());
  }
  clearBoard() {
    store.dispatch(actions.resetBoard(BOARD_SIZE));
  }

  render() {
    return (
      <div className='App'>
        <h2>Conway's Game of Life</h2>
        <Board 
          boardArray={this.props.updateBoard} 
          toggleCell={this.toggleCell.bind(this)}
          clickTest={this.clickTest}
        />
        <Button onClick={this.evaluateBoard.bind(this)} text={'Step'} />
        <Button onClick={this.clearBoard.bind(this)} text={'Reset'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);