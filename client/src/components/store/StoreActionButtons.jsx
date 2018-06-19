import React from "react";
import styled from "styled-components";
import ReviewButton from "../action_buttons/ReviewButton";
import CallButton from "../action_buttons/CallButton";
import DirectionsButton from "../action_buttons/DirectionsButton";
import BookmarkButton from "../action_buttons/BookmarkButton";

const StoreActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StoreActionButtons = ({phone}) => (
  <StoreActionButtonContainer>
    <ReviewButton />
    <CallButton phone={phone}/>
    <DirectionsButton />
    <BookmarkButton />
  </StoreActionButtonContainer>
);

export default StoreActionButtons;