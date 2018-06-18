import React from 'react';
import styled from 'styled-components';

const StoreHours = ({ hours }) => {
  const hoursFinder = () => {
    const today = new Date;
    const day = today.getDay();
    if (day === 0) { 
      return hours[0].open[day + 6];
     } else { 
      return hours[0].open[(day - 1)];
     }
  };

  const openHours = hoursFinder();
  return <div>
      <span>{hours[0].is_open_now ? "Open" : "Closed"}</span>
      <span>
        {`${openHours.start}`} - {`${openHours.end}`}
      </span>
    </div>;
};

export default StoreHours;
