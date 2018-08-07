import { connect } from 'react-redux';
import Board from '../components/board';
import actions from '../actions';

const mapStateToProps = (state) => ({
  boardArray: state.present
});
const mapDispatchToProps = dispatch => ({
  toggleCell: (row, col, isAlive) => {
    dispatch(actions.toggleCell(row, col, isAlive));
  }
})

const LifeBoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default LifeBoardContainer;