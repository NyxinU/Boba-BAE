import React from 'react';
import styled from 'styled-components';
import { Text } from "../GlobalStyledComponents";

const StyledStoreHours = styled.div`
  margin-top: 1vw;
`;

const OpenClosedLabel = Text.extend`
  color: ${props => props.open ? "#00c600" : "red" };
`;

const StoreHours = ({ hours }) => {
  hours = hours[0];
  const timeConvert = {
    "0000": "12:00 am",
    "0100": "1:00 am",
    "0200": "2:00 am",
    "0300": "3:00 am",
    "0400": "4:00 am",
    "0500": "5:00 am",
    "0600": "6:00 am",
    "0700": "7:00 am",
    "0800": "8:00 am",
    "0900": "9:00 am",
    "1000": "10:00 am",
    "1100": "11:00 am",
    "1200": "12:00 pm",
    "1300": "1:00 pm",
    "1400": "2:00 pm",
    "1500": "3:00 pm",
    "1600": "4:00 pm",
    "1700": "5:00 pm",
    "1800": "6:00 pm",
    "1900": "7:00 pm",
    "2000": "8:00 pm",
    "2100": "9:00 pm",
    "2200": "10:00 pm",
    "2300": "11:00 pm",
  };

  const getStoreHours = () => {
    const today = new Date();
    let day = today.getDay();
    if (day === 0) { 
      day += 6;
    } else { 
      day -= 1;
    }
    for (let index = 0; index < hours.open.length; index++) {
      let hash = hours.open[index];
      if( hash.day === day) { return [hash.start, hash.end]; }
    }
    return false;
  };

  const storeHours = getStoreHours();
  return (
    <StyledStoreHours>
      <OpenClosedLabel open={hours.is_open_now}>{hours.is_open_now ? "Open" : "Closed"}</OpenClosedLabel>
      {storeHours ? <Text>&nbsp;&#8226;&nbsp;{timeConvert[storeHours[0]]} - {timeConvert[storeHours[1]]}</Text> : ""}
    </StyledStoreHours>
  );
};

export default StoreHours;
