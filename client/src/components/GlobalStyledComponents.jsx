// import React from "react";
import styled from "styled-components";

export const Text = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 3.5vw;
`;

export const Label = Text.extend`
  font-size: 2.5vw;
  color: #999999;
`;

export const Line = styled.div`
  &:after {
    content: "";
    display: block;
    margin: 4vw auto;
    width: 90vw;
    border-bottom: 1px solid #e6e6e6;
  }
`;

export const BottomLabeledButtons = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 30vw;
  border: none;
  background: none;
`;

export const StyledIcon = styled.i`
  font-size: 5vw;
  color: #999999;
  margin-bottom: 4vw;
`;


