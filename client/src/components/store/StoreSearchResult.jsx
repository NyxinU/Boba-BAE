import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRating from "../star_rating/StarRating";
import { Text, Line } from "../GlobalStyledComponents";
import StoreAddress from "./StoreAddress";


const StoreName = styled.h2`
  margin-top: 4vw;
  margin-bottom: 1vw;
  font-size: 6vw;
`;

const StoreSearchResult = ({ store }) => (
  <Link to={`biz/${store.alias}`}>
    <StoreName>{store.name}</StoreName>
    <StarRating rating={store.rating} />
    <Text>{store.review_count} Reviews</Text>
    <StoreAddress location={store.location.display_address} />
    <Line />
  </Link>
);

export default StoreSearchResult;
