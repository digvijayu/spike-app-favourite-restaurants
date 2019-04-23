import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { GOOGLE_MAPS_API } from './../../utils/constants';
import MapPin from './../MapPin';

class Map extends Component {
  getCenter() {
    const { favouriteRestaurants } = this.props;
    const lats = favouriteRestaurants.map(r => r.geoLocation.lat);
    const lngs = favouriteRestaurants.map(r => r.geoLocation.lng);
    return {
      lat: (Math.max.apply(null, lats) + Math.min.apply(null, lats)) / 2 || 0,
      lng: (Math.max.apply(null, lngs) + Math.min.apply(null, lngs)) / 2 || 0
    };
  }

  render() {
    const { favouriteRestaurants } = this.props;
    const defaultProps = {
      center: this.getCenter(),
      zoom: 4
    };
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          defaultAverageCenter={true}
          averageCenter={true}>
          {favouriteRestaurants.map(restaurant => (
            <MapPin
              lat={restaurant.geoLocation.lat}
              lng={restaurant.geoLocation.lng}
              restaurant={restaurant}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favouriteRestaurants: state.restaurants.favouriteRestaurants
});

export default connect(
  mapStateToProps,
  {}
)(Map);
