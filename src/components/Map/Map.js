import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAPS_API } from './../../utils/constants';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {
            // <AnyReactComponent
            //   lat={59.955413}
            //   lng={30.337844}
            //   text="My Marker"
            // />
          }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
