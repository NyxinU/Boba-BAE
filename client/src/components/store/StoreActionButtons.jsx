import React from "react";
import styled from "styled-components";
import ReviewButton from "../action_buttons/ReviewButton";
import CheckInButton from "../action_buttons/CheckInButton";
import BookmarkButton from "../action_buttons/BookmarkButton";

const StoreActionButtonContainer = styled.div`
  display: flex;
  width: 90vw;
  margin: 4vw auto;
`;

const StoreActionButtons = () => (
  <StoreActionButtonContainer>
    <ReviewButton />
    <CheckInButton />
    <BookmarkButton />
  </StoreActionButtonContainer>
);

export default StoreActionButtons;