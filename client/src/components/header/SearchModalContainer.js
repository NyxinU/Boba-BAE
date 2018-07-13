import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchStores } from '../../actions/store_actions';
import SearchModal from './SearchModal';

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = () => {
  return {}
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchModal));
