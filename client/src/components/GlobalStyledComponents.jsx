// import React from "react";
import styled from "styled-components";

export const Text = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 3.5vw;
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
  width: 22.5vw;
`;

export const StyledIcon = styled.i`
  font-size: 5vw;
  color: #999999;
  margin-bottom: 4vw;
`;


