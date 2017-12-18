import { connect } from 'react-redux';
import Button from '../components/button';
import  actions from '../actions';

const mapStateToProps = (state, ownProps) => {
  let isDisabled = state.past.length === 0;
  return {
    isDisabled
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(actions.undo());
  }
})

const UndoButton = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Button);

export default UndoButton;  