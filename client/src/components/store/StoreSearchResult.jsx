import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRating from "../star_rating/StarRating";
import { Text, Line } from "../GlobalStyledComponents";
import StoreAddress from "./StoreAddress";

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;

  &:hover, &:focus &:active, &:visited, &::selection {
    color: black;
    text-decoration: none;
    outline: none;
  }
`;

const StoreName = styled.h2`
  margin-top: 4vw;
  margin-bottom: 1vw;
  font-size: 6vw;
`;

const StyledImg = styled.img`
  display: inline-block;
  object-fit: cover;
  margin-top: 4vw;
  margin-right: 2vw;
  width: 23vw;
  height: 23vw;
  border-radius: 2vw;
`;

const StoreSearchResult = ({ store }) => (
  <div>
    <StyledLink to={`biz/${store.alias}`}>
      <StyledImg src={`${store.image_url}`} alt="store image"/>
      <span>
        <StoreName>{store.name}</StoreName>
        <StarRating rating={store.rating} />
        <Text>{store.review_count} Reviews</Text>
        <StoreAddress location={store.location.display_address} />
      </span>
    </StyledLink>
    <Line />
  </div>
);

export default StoreSearchResult;
