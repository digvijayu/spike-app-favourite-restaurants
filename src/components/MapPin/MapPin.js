import React, { Component } from 'react';
import MapPinImage from './map-pin.png';

class MapPin extends Component {
  render() {
    return (
      <div>
        <img src={MapPinImage} width="20px" height="20px" alt="name" />
      </div>
    );
  }
}

export default MapPin;
