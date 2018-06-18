import React from "react";
import styled from "styled-components";
import StarRating from "../star_rating/StarRating";
import StoreHours from "./StoreHours";
import { Text, Line } from "../GlobalStyledComponents";

const StoreName = styled.h2`
  margin-top: 2vw;
  margin-bottom: 1vw;
  font-size: 8vw;
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
  </div>
);

export default StoreInformation;
