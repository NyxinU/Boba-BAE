import React from "react";
import {
  Text,
  BottomLabeledButtons,
  StyledIcon
} from "../GlobalStyledComponents";

const CheckInButton = () => {

  return (
    <BottomLabeledButtons>
      <StyledIcon className="fas fa-map-marker" />
      <Text>Check-In</Text>
    </BottomLabeledButtons>
  );
};

export default CheckInButton;
