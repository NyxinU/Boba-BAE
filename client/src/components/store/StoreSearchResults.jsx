import React from 'react';
import queryString from 'query-string';
import StoreSearchResult from './StoreSearchResult';

class StoreSearchResults extends React.Component {

  componentDidMount() {
    const keys = queryString.parse(this.props.location.search);
    this.props.fetchStores(keys.term, keys.location);
  }

  render() {
    console.log(this.props)
    if (this.props.stores === undefined) {
      return (
        <div />
      );
    }
    return (
      <div>
        {this.props.stores.map(store => <StoreSearchResult store={store} />)}
      </div>
    );
  }
}

export default StoreSearchResults;