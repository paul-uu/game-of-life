import React from 'react';
import PropTypes from 'prop-types';

import store from '../store';
import actions from '../actions';

class Cell extends React.Component {

	render() {
		let cssClasses = this.props.isAlive ? 'cell alive' : 'cell dead';
		let self = this;
		return (
			<span 
				className={cssClasses} 
				onClick={self.props.toggleCell}
			>
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