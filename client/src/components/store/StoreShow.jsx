import React from 'react';

class StoreShow extends React.Component {
  componentDidMount() {
    this.props.fetchStore(this.props.match.params.businessId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
      this.props.fetchStore(this.props.match.params.businessId);
    }
  }

  render() {
    if (this.props.store === undefined) {
      return (
        <div />
      );
    }
    return (
      <div>
        <p>rendered</p>
      </div>
    );
  }
}

export default StoreShow;
