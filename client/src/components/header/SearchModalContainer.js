import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchStores } from '../../actions/store_actions';
import SearchModal from './SearchModal';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => ({
  fetchStores: (term, location) => dispatch(fetchStores(term, location)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchModal));
