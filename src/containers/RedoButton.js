import { connect } from 'react-redux';
import Button from '../components/button';
import  actions from '../actions';

const mapStateToProps = (state, ownProps) => {
  let isDisabled = state.future.length === 0;
  return {
    isDisabled
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(actions.redo());
  }
})

const RedoButton = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Button);

export default RedoButton;  