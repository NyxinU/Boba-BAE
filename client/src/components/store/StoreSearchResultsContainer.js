import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchStores } from '../../actions/store_actions';
import {getStores} from '../../reducers/selector';
import StoreSearchResults from './StoreSearchResults';

const mapStateToProps = (state) => {
  if (state.entities.stores.stores) {
    const stores = state.entities.stores.stores.businesses
    return {stores}
  } else {
    return {}
  }
};

const mapDispatchToProps = dispatch => ({
  fetchStores: (term, location) => dispatch(fetchStores(term, location)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreSearchResults));