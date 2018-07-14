import React from "react";
import styled from "styled-components";

const StyledStoreMap = styled.iframe`
  display: inline-block;
  width: 90vw;
  height: 45vw;
  margin-bottom: 3vw;
  frameborder: 0;
  border: 0; 
`;

const StoreMap = ({name, location}) => {
  const parsedName = name.split("&").join("");
  return (
    <StyledStoreMap 
      src={ 
        `https://www.google.com/maps/embed/v1/place?q=${parsedName}${location.address1}${location.address2}${location.city}${location.zip_code}&zoom=16&key=AIzaSyDKNfQclyQTJPHelT66kOz5gJygWfmyQTM`
      } allowFullScreen>
    </StyledStoreMap>
  );
};

export default StoreMap;
