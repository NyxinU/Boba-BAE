import { connect } from 'react-redux';
import { fetchStores } from '../../actions/store_actions';
import SearchModal from './SearchModal';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => ({
  fetchStores: (term, location) => dispatch(fetchStores(term, location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchModal);
