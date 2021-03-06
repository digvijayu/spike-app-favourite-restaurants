import React, { Component } from 'react';
import styled from 'styled-components';
import MapPinImage from './map-pin.png';

const Pin = styled.div`
  position: relative;
`;

const PinImage = styled.img`
  position: absolute;
  width: 2rem;
  height: 2rem;
  bottom: 0;
  left: -1rem;
  cursor: pointer;
`;

class MapPin extends Component {
  render() {
    const {
      restaurant: { name }
    } = this.props;
    return (
      <Pin>
        <PinImage className="MapPin__image" src={MapPinImage} alt={name} />
      </Pin>
    );
  }
}

export default MapPin;
