import React from 'react';

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
                onClick={this.toggleCell.bind(self)}
            ></span>
        )
    }
}

export default Cell;