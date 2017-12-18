import { connect } from 'react-redux';
import Board from '../components/board';
import actions from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    //boardArray: state.present.boardArray
    boardArray: state.present
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  /*
  console.log(ownProps);
  return {
    toggleCell: dispatch( actions.toggleCell() )
  }
  */
});

const LifeBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default LifeBoardContainer;