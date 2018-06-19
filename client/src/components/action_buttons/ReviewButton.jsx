import React from "react";
import Star from "../star_rating/Star";
import { Text, BottomLabeledButtons } from "../GlobalStyledComponents";
import styled from "styled-components";

const ReviewButton = () => {

  return <BottomLabeledButtons>
      <Star fill={"#999999"} />
      <Text>Review</Text>
    </BottomLabeledButtons>;
};

export default ReviewButton;
