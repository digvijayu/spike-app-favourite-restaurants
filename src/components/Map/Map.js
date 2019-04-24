import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { GOOGLE_MAPS_API } from './../../utils/constants';
import MapPin from './../MapPin';
import { selectRestaurant } from './../../store/restaurants/actions';

class Map extends Component {
  handleOnChildClick(key, childProps) {
    this.props.selectRestaurant(childProps.restaurant);
  }

  render() {
    const { favouriteRestaurants, center } = this.props;
    const defaultProps = {
      center: center,
      zoom: 4
    };

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          defaultAverageCenter={true}
          averageCenter={true}
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
      </div>
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
  const lats = favouriteRestaurants.map(r => r.geoLocation.lat);
  const lngs = favouriteRestaurants.map(r => r.geoLocation.lng);
  return {
    lat: (Math.max.apply(null, lats) + Math.min.apply(null, lats)) / 2 || 0,
    lng: (Math.max.apply(null, lngs) + Math.min.apply(null, lngs)) / 2 || 0
  };
};
