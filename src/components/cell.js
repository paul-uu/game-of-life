import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {

    toggleCell() {
        this.props.onClick( this.props.row, this.props.col );
    }
    render() {
        let cssClasses = this.props.isAlive ? 'cell alive' : 'cell dead';
        let self = this;
        return (
            <span 
                className={cssClasses} 
                onClick={this.toggleCell.bind(self)}>
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