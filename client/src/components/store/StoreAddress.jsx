import React from "react";
import styled from "styled-components";
import { Text } from "../GlobalStyledComponents";

const StyledStoreAddress = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoreAddress = ({ location }) => {
  return (
    <StyledStoreAddress>
      {location.map(address => <Text>{address}</Text>)}
    </StyledStoreAddress>
  );
};

export default StoreAddress;
