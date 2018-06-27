import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vw;
  background-color: #d12424;
`;

const StyledLink = styled.a`
  font-size: 5vw;
  font-family: 'Pacifico', cursive;
  color: white;
  text-decoration: none;

  &:hover, &:focus &:active, a:visited {
    color: white;
    text-decoration: none;
    outline: none;
  }
`;

const HeaderContainer = () => {
  return (
    <StyledHeader>
      <StyledLink href="/">Boba Bae</StyledLink>
    </StyledHeader>
  );
};

export default HeaderContainer;

