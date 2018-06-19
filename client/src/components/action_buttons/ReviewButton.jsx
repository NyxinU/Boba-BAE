import React from "react";
import {
  Text,
  BottomLabeledButtons,
  StyledIcon
} from "../GlobalStyledComponents";

const ReviewButton = () => {

  return (
  <BottomLabeledButtons>
      <StyledIcon className="fas fa-star"/>
    <Text>Review</Text>
  </BottomLabeledButtons>
  );
};

export default ReviewButton;
