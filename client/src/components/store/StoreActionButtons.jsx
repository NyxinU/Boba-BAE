import React from "react";
import styled from "styled-components";
import ReviewButton from "../action_buttons/ReviewButton";
import CallButton from "../action_buttons/CallButton";

const StoreActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StoreActionButtons = ({phone}) => (
  <StoreActionButtonContainer>
    <ReviewButton />
    <CallButton phone={phone}/>
  </StoreActionButtonContainer>
);

export default StoreActionButtons;