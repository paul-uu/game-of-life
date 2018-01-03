import { connect } from 'react-redux';
import Cell from  '../components/cell';
import actions from '../actions';
import store from '../store';

const mapStateToProps = (state, ownProps) => ({
  row: ownProps.row,
  col: ownProps.col,
  isAlive: ownProps.isAlive
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCell: () => dispatch(actions.toggleCell(ownProps.row, ownProps.col, ownProps.isAlive))
});

const CellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

export default CellContainer;