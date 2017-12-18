import { connect } from 'react-redux';
import Board from '../components/board';

const mapStateToProps = (state, ownProps) => ({
  boardArray: state.present
})

const LifeBoardContainer = connect(mapStateToProps)(Board);

export default LifeBoardContainer;