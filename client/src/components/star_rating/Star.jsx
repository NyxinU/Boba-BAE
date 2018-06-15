import React from "react";
import styled from "styled-components";

const StyledStar = styled.i`
  margin-right: 3px;
  color: white;
  padding: 1vw; 
  border-radius: 1vw;
  background: ${props => props.fill};
`;

const Star = ({ fill, color }) => (
  <StyledStar className="fas fa-star" fill={fill} color={color}/>
);

export default Star;



