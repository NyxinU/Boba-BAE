import React from 'react';
import queryString from 'query-string';
import StoreSearchResult from './StoreSearchResult';
import { Line } from "../GlobalStyledComponents";

class StoreSearchResults extends React.Component {

  componentDidMount() {
    const keys = queryString.parse(this.props.location.search);
    this.props.fetchStores(keys.term, keys.location);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      const keys = queryString.parse(this.props.location.search);
      this.props.fetchStores(keys.term, keys.location);
    }
  }

  render() {
    if (this.props.stores === undefined) {
      return (
        <div />
      );
    }
    return (
      <div>
        <Line />
        {this.props.stores.map((store, idx) => <StoreSearchResult key={idx} store={store} />)}
      </div>
    );
  }
}

export default StoreSearchResults;