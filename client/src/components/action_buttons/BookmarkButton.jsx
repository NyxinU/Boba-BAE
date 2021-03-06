import React from "react";
import {
  Text,
  BottomLabeledButtons,
  StyledIcon
} from "../GlobalStyledComponents";

const BookmarkButton = () => {

  return (
    <BottomLabeledButtons>
      <StyledIcon className="fas fa-bookmark"/>
      <Text>Save</Text>
    </BottomLabeledButtons>
  );
};

export default BookmarkButton;
