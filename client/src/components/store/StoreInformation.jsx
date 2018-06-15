import React from "react";
import styled from "styled-components";
import StarRating from "../star_rating/StarRating";

const StoreName = styled.h2`
  margin-top: 4vw;
  margin-bottom: 2vw;
  font-size: 8vw;
`;

const StoreInformation = ({ store }) => (
  <div>
    <StoreName>{ store.name }</StoreName>
    <StarRating rating={store.rating}/>
  </div>
);

export default StoreInformation;
