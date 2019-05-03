import React from 'react';
import styled from 'styled-components';
import ratingStarImg from './rating-star.png';

const Star = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  background-image: url(${ratingStarImg});
  display: inline-block;
`;

export const getStars = rating => {
  let ratingStars = [];
  for (let index = 0; index < rating; index++) {
    ratingStars.push(<Star className="App__Star" key={index} />);
  }
  return ratingStars;
};
