import React from "react";
// import styled from "styled-components";
import Star from "./Star";

const StarRating = ({ rating }) => {
  const colorScale = {
    "5": "#d12424",
    "4": "#f05a4f",
    "3": "#ff9142",
    "2": "#fcbe12",
    "1": "#f0ba78",
    "0": "#cccccc"
  };

  const color = colorScale[Math.floor(rating).toString()];

  const ratingArr = [];
  while (ratingArr.length < 5) {
    if (rating >= .75) {
      ratingArr.push(color);
      rating--;
    } else if (rating >= .25) {
      ratingArr.push(`linear-gradient(to right, ${color} 50%, #cccccc 50%)`);
      rating--;
    } else {
      ratingArr.push("#cccccc");
      rating--;
    }
  }

  return (
    <div>
      {ratingArr.map((fill, i) => <Star key={i} fill={fill} />)}
    </div>
  );
};

export default StarRating;
