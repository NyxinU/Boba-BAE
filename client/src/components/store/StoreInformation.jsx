import React from "react";
import styled from "styled-components";
import StarRating from "../star_rating/StarRating";

const StoreName = styled.h2`
  font-size: 8vw;
`;

const StoreInformation = ({ store }) => (
  <div>
    <StoreName>{ store.name }</StoreName>
    <StarRating rating={store.rating}/>
  </div>
);

export default StoreInformation;
