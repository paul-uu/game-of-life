import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button 
        className='btn' 
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Button;