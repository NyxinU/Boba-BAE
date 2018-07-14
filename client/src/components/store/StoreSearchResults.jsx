import React from 'react';
import queryString from 'query-string';

class StoreSearchResults extends React.Component {
  constructor(props, context) {
    super(props,context);

    this.state = {
      stores: [],
    };

  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values.term);
    console.log(values.location);
  }

  render() {
    return (
      <div>search results</div>
    );
  }
}

export default StoreSearchResults;