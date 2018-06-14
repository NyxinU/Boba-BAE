import { connect } from 'react-redux';

import { fetchStore } from '../../actions/store_actions';
import { getStoreInfo } from '../../reducers/selector'
import StoreShow from './StoreShow';

const mapStateToProps = (state) => {
  const store = getStoreInfo(state.entities.stores);
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
