import React from "react";
import styled from "styled-components";
import {
  Text,
  StyledIcon
} from "../GlobalStyledComponents";

const StyledCallIcon = StyledIcon.extend`
  transform: scaleX(-1);
  margin-bottom: 0;
  font-size: 3.5vw;
  color: #5b5b5b;
`;

const StyledCallButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
`;

const CallButton = ({ phone, displayPhone }) => {
  
  const callStore = () => {
    window.location.href=`tel:${phone}`;
  };

  return (
      <StyledCallButton onClick={callStore}>
        <StyledCallIcon className="fas fa-phone" />
        &nbsp;&nbsp;
        <Text>Call {`${displayPhone}`}</Text>
      </StyledCallButton>
  );
};

export default CallButton;
