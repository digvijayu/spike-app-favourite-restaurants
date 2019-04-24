import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GOOGLE_MAPS_API } from './../../utils/constants';
import MapPin from './../MapPin';
import { selectRestaurant } from './../../store/restaurants/actions';

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

class Map extends Component {
  handleOnChildClick(key, childProps) {
    this.props.selectRestaurant(childProps.restaurant);
  }

  render() {
    const { favouriteRestaurants, center } = this.props;
    const defaultProps = {
      center: center.center,
      zoom: center.zoom
    };

    return (
      <MapContainer>
        <GoogleMapReact
          className="Map__google-map"
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          defaultAverageCenter={true}
          averageCenter={true}
          yesIWantToUseGoogleMapApiInternals
          onChildClick={this.handleOnChildClick.bind(this)}>
          {favouriteRestaurants.map((restaurant, index) => (
            <MapPin
              lat={restaurant.geoLocation.lat}
              lng={restaurant.geoLocation.lng}
              restaurant={restaurant}
              key={index}
            />
          ))}
        </GoogleMapReact>
      </MapContainer>
    );
  }
}

const mapStateToProps = state => ({
  favouriteRestaurants: state.restaurants.favouriteRestaurants,
  center: getCenter(state.restaurants.favouriteRestaurants)
});

const mapActionToProps = dispatch => ({
  selectRestaurant: restaurant => dispatch(selectRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Map);

const getCenter = favouriteRestaurants => {
  const selectedRestaurant = favouriteRestaurants.filter(
    restarurant => restarurant.isSelected
  )[0];
  if (selectedRestaurant) {
    return {
      center: selectedRestaurant.geoLocation,
      zoom: 11
    };
  }

  const lats = favouriteRestaurants.map(r => r.geoLocation.lat);
  const lngs = favouriteRestaurants.map(r => r.geoLocation.lng);

  return {
    center: {
      lat:
        (Math.max.apply(null, lats) + Math.min.apply(null, lats)) / 2 ||
        51.5124319,
      lng:
        (Math.max.apply(null, lngs) + Math.min.apply(null, lngs)) / 2 ||
        -0.1269096
    },

    zoom: 1
  };
};
