import React from "react";
import {
  Text,
  BottomLabeledButtons,
  StyledIcon
} from "../GlobalStyledComponents";

const DirectionsButton = ({ phone }) => {

  return (
    <BottomLabeledButtons>
      <StyledIcon className="fas fa-map"/>
      <Text>Directions</Text>
    </BottomLabeledButtons>
  );
};

export default DirectionsButton;
