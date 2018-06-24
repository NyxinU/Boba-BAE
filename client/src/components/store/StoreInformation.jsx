import React from "react";
import styled from "styled-components";
import StarRating from "../star_rating/StarRating";
import StoreHours from "./StoreHours";
import { Text, Line } from "../GlobalStyledComponents";
import StoreActionButtons from "./StoreActionButtons";
import StoreMap from "./StoreMap";
import StoreAddress from "./StoreAddress";
import CallButton from "../action_buttons/CallButton";
import StoreMoreInfo from "./StoreMoreInfo";

const StoreName = styled.h2`
  margin-top: 4vw;
  margin-bottom: 1vw;
  font-size: 6vw;
`;

const StoreInformation = ({ store }) => (
  <div>
    <StoreName>{store.name}</StoreName>
    <StarRating rating={store.rating} />
    <Text>{store.review_count} Reviews</Text>
    <StoreHours hours={store.hours} />
    <Line />
    <StoreActionButtons />
    <StoreMap name={store.name} location={store.location} />
    <StoreAddress location={store.location.display_address} />
    <CallButton phone={store.phone} displayPhone={store.display_phone} />
    <StoreMoreInfo />
  </div>
);

export default StoreInformation;
