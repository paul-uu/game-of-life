import { connect } from 'react-redux';
import Cell from  '../components/cell';
import actions from '../actions';
import store from '../store';


const mapStateToProps = (state, ownProps) => {
  return {
    row: ownProps.row,
    col: ownProps.col,
    isAlive: state.present[ownProps.row][ownProps.col]
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCell: () => { 
    dispatch(actions.toggleCell(ownProps.row, ownProps.col, ownProps.isAlive))
  }
});

const CellContainer = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellContainer;