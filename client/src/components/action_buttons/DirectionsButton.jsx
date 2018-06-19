import React from "react";
import styled from "styled-components";
import { Text, BottomLabeledButtons } from "../GlobalStyledComponents";

// const StyledPhoneIcon = styled.i`
//   font-size: 4.5vw;
//   color: white;
//   padding: 1vw 1vw 1vw 1vw;
//   border-radius: 1vw;
//   background: #999999;
// `;


const DirectionsButton = ({ phone }) => {

  const callStore = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <BottomLabeledButtons onClick={callStore}>
      <img src="../../assets/images/directions.png" alt=""/>
      <Text>Directions</Text>
    </BottomLabeledButtons>
  );
};

export default DirectionsButton;
