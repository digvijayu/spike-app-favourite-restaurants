import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantList extends Component {
  render() {
    const { favouriteRestaurants } = this.props;
    return (
      <div>
        {favouriteRestaurants.length < 1 && (
          <div>No Favourite Restaurants Available.</div>
        )}
        {favouriteRestaurants.map(restaurant => (
          <div>
            <div>{restaurant.name}</div>
            <div>{restaurant.favouriteFood}</div>
            <div>{restaurant.rating}</div>
            <div>
              <button>Remove</button>
            </div>
          </div>
        ))}
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
)(RestaurantList);
