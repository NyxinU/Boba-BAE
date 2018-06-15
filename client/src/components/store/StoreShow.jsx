import React from 'react';
import styled from 'styled-components';

import StoreInformation from './StoreInformation';

const StyledStoreShow = styled.div`

`;

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
      <StyledStoreShow>
        <StoreInformation store={this.props.store}/>
      </StyledStoreShow>
    );
  }
}

export default StoreShow;
