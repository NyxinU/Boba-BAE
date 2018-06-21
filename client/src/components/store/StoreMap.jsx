import React from "react";
import styled from "styled-components";

const StyledStoreMap = styled.iframe`
  display: inline-block;
  width: 90vw;
  height: 45vw;
  frameborder: 0;
  border: 0; 
`;

const StoreMap = ({name, location}) => {
  return (
    <StyledStoreMap 
      src={ 
        `https://www.google.com/maps/embed/v1/place?q=${name}
        %20${location.address1}
        %20${location.address2}
        %20${location.city}
        %20${location.zip_code}
        &zoom=16
        &key=AIzaSyDKNfQclyQTJPHelT66kOz5gJygWfmyQTM`
      } allowFullScreen>
    </StyledStoreMap>
  );
};

export default StoreMap;
