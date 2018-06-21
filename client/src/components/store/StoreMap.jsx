import React from "react";
import styled from "styled-components";

const style = {
  width:"600",
  height:"450", 
  frameborder:"0",
  border:"0"
};

const StyledStoreMap = styled.img`
  display: inline-block;
  width: 90vw;
  height: 45vw;
`;

const StoreMap = ({coordinates}) => {
  const mapWidth = Math.floor(window.innerWidth * .9);
  const mapHeight = Math.floor(mapWidth/2);
  return (
    // <StyledStoreMap src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.latitude},${coordinates.longitude}
    // &zoom=17
    // &size=${mapWidth}x${mapHeight}
    // &maptype=roadmap
    // &markers=color:red%7Clabel:%7C${coordinates.latitude},${coordinates.longitude}
    // &key=AIzaSyDKNfQclyQTJPHelT66kOz5gJygWfmyQTM`} alt=""/>
    <iframe style={style} src="https://www.google.com/maps/embed/v1/place?q=boba%20guy&key=AIzaSyDKNfQclyQTJPHelT66kOz5gJygWfmyQTM" allowfullscreen></iframe>
  );
};

export default StoreMap;
