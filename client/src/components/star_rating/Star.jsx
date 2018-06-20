import React from "react";
import styled from "styled-components";

const StyledStar = styled.i`
  margin-right: 3px;
  font-size: 3.5vw;
  color: white;
  padding: 1vw; 
  border-radius: 1vw;
  background: ${props => props.fill};
`;

const Star = ({ fill }) => (
  <StyledStar className="fas fa-star" fill={fill}/>
);

export default Star;



