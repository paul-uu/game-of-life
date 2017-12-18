import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

class Board extends React.Component {

	render() {
		let self = this;
		return (
			<div className='board'>
				{
					this.props.boardArray.map( (val, index) => {
						let rowIndex = index;
						return (
							<div className='board__row' key={rowIndex}>
								{
									val.map((val, colIndex) => {
										return (
											<Cell 
												isAlive={val} 
												key={"" + rowIndex + colIndex} 
												//onClick={this.props.toggleCell}
												//onClick={ self.toggleCell }
												row={rowIndex}
												col={colIndex}
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