import React from 'react';
import PropTypes from 'prop-types';

import store from '../store';
import actions from '../actions';

class Cell extends React.Component {

	toggleCell() {
		store.dispatch( actions.toggleCell(this.props.row, this.props.col, !this.props.isAlive) );
	}

	render() {
		let cssClasses = this.props.isAlive ? 'cell alive' : 'cell dead';
		let self = this;
		return (
			<span 
				className={cssClasses} 
				onClick={self.toggleCell.bind(this)}>
			</span>
		)
	}
}
Cell.propTypes = {
	isAlive: PropTypes.bool,
	onClick: PropTypes.func,
	row: PropTypes.number,
	col: PropTypes.number
}

export default Cell;