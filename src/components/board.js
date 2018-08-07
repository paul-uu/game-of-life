import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

class Board extends React.Component {

	render() {
		return (
			<div className='board'>
				{
					this.props.boardArray.map( (rowArr, index) => {
						let rowIndex = index;
						return (
							<div className='board__row' key={rowIndex}>
								{
									rowArr.map((cellIsAlive, colIndex) => {
										return (
											<Cell
												isAlive={cellIsAlive}
												key={"" + rowIndex + colIndex} 
												row={rowIndex}
												col={colIndex}
												toggleCell={this.props.toggleCell.bind(null, rowIndex, colIndex, cellIsAlive)}
											/>
										)
									})
								}
							</div>
						)
					})
				}
			</div>
		);
	}
}
Board.propTypes = {
	boardArray: PropTypes.array,
	toggleCell: PropTypes.func
}

export default Board;