import { connect } from 'react-redux';

import { fetchStore } from '../../actions/store_actions';
import StoreShow from './store_show';

const mapStateToProps = (state, ownProps) => {
  const store = state.entities.stores[Object.keys(state.entities.stores)[0]];
  return {
    store,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStore: id => dispatch(fetchStore(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreShow);
