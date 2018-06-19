// import React from "react";
import styled from "styled-components";

export const Text = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 5vw;
`;

export const Line = styled.div`
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 90vw;
    padding-top: 0.5vh;
    border-bottom: 1px solid #e6e6e6;
  }
`;

export const BottomLabeledButtons = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


