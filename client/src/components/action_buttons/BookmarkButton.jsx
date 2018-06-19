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
      <Text>Bookmark</Text>
    </BottomLabeledButtons>
  );
};

export default BookmarkButton;
