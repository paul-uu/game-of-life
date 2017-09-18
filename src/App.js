import React, { Component } from 'react';
import Board from './components/board';
import Button from './components/button';
import './App.css';

const BOARD_SIZE = 20;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: [],
      isEditable: true
    }
  }

  componentDidMount() {
    this.clearBoard();
  }
  generateBlankBoard(size) {
    let newBoard = [];
    for (let i = 0; i < size; i++) {
      newBoard[i] = [];
      for (let j = 0; j < size; j++) {
        newBoard[i][j] = false;
      }
    }
    return newBoard;
    
  }

  toggleCell(row, col) {
    let board = this.state.boardArray;
    board[row][col] = board[row][col] ? false : true;
    this.setState({ boardArray: board });
  }

  evaluateBoard() {
    console.log('Evaluation --- ');

    let current = this.state.boardArray;
    let blank = this.generateBlankBoard(BOARD_SIZE);


    let updated = current.map((row, rowIndex) => {
      return row.map((isAlive, colIndex) => { 
    
        let topLeft     = this.getNeighborStatus(current, rowIndex - 1, colIndex - 1),
            top         = this.getNeighborStatus(current, rowIndex - 1, colIndex),
            topRight    = this.getNeighborStatus(current, rowIndex - 1, colIndex + 1),
            left        = this.getNeighborStatus(current, rowIndex, colIndex - 1),
            right       = this.getNeighborStatus(current, rowIndex, colIndex + 1),
            bottomLeft  = this.getNeighborStatus(current, rowIndex + 1, colIndex - 1),
            bottom      = this.getNeighborStatus(current, rowIndex + 1, colIndex),
            bottomRight = this.getNeighborStatus(current, rowIndex + 1, colIndex + 1);
      
        let neighborStatuses = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight];
        
        let aliveNeighbors = neighborStatuses.filter(status => status === true).length;
        
        if (isAlive) {
          if (aliveNeighbors < 2 || aliveNeighbors > 3)
            return false;
          else 
            return true;
        }
        else {
          if (aliveNeighbors === 3)
            return true;
        }
        return false;
      });
    });
    this.setState({ boardArray: updated });
  }
  /* helper function to determine out cells that are beyond the bounds of the board */
  getNeighborStatus(board, rowIndex, colIndex) {
    if (rowIndex < 0 || rowIndex >= BOARD_SIZE || colIndex < 0 || colIndex >= BOARD_SIZE)
      return false;
    return board[rowIndex][colIndex]
  }

  clearBoard() {
    this.setState({ boardArray: this.generateBlankBoard( BOARD_SIZE ) });
  }


  render() {

    return (
      <div className='App'>

        <h2>Conway's Game of Life</h2>
        <Board 
          boardArray={this.state.boardArray} 
          isEditable={this.state.isEditable}
          toggleCell={this.toggleCell.bind(this)}
          clickTest={this.clickTest}
        />
        <Button onClick={this.evaluateBoard.bind(this)} text={'Step'} />
        <Button onClick={this.clearBoard.bind(this)} text={'Reset'} />
      </div>
    );
  }
}

export default App;
