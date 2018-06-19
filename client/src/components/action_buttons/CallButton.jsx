import React from "react";
import styled from "styled-components";
import { Text, BottomLabeledButtons } from "../GlobalStyledComponents";

const StyledPhoneIcon = styled.i`
  font-size: 4.5vw;
  color: white;
  padding: 1vw 1vw 1.05vw 1vw;
  border-radius: 1vw;
  background: #999999;
  transform: scaleX(-1);
`;


const CallButton = ({ phone }) => {
  
  const callStore = () => {
    window.location.href=`tel:${phone}`;
  };

  return (
      <BottomLabeledButtons onClick={callStore}>
        <StyledPhoneIcon className="fas fa-phone" />
        <Text>Call</Text>
      </BottomLabeledButtons>
  );
};

export default CallButton;
