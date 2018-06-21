import React from "react";
import styled from "styled-components";
import StarRating from "../star_rating/StarRating";
import StoreHours from "./StoreHours";
import { Text, Line } from "../GlobalStyledComponents";
import StoreActionButtons from "./StoreActionButtons";
import StoreMap from "./StoreMap";

const StoreName = styled.h2`
  margin-top: 4vw;
  margin-bottom: 1vw;
  font-size: 6vw;
`;

const ReviewCount = Text.extend`

`

const StoreInformation = ({ store }) => (
  <div>
    <StoreName>{store.name}</StoreName>
    <StarRating rating={store.rating} />
    <ReviewCount>{store.review_count} Reviews</ReviewCount>
    <StoreHours hours={store.hours} />
    <Line />
    <StoreActionButtons />
    <StoreMap name={store.name} location={store.location} />
  </div>
);

export default StoreInformation;
