import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {

	constructor(props) {
		super(props);
	}

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