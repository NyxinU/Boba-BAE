import React from "react";
import {
  Text,
  BottomLabeledButtons,
  StyledIcon
} from "../GlobalStyledComponents";

const StyledStarIcon = StyledIcon.extend`
  transform: scaleX(-1); 
`;

const CallButton = ({ phone }) => {
  
  const callStore = () => {
    window.location.href=`tel:${phone}`;
  };

  return (
      <BottomLabeledButtons onClick={callStore}>
        <StyledStarIcon className="fas fa-phone" />
        <Text>Call</Text>
      </BottomLabeledButtons>
  );
};

export default CallButton;
