import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeRestaurant } from './../../store/restaurants/actions';

class RestaurantList extends Component {
  handleOnRemoveClick(restaurant) {
    this.props.removeRestaurant(restaurant);
  }

  render() {
    const { favouriteRestaurants } = this.props;
    return (
      <div>
        {favouriteRestaurants.length < 1 && (
          <div>No Favourite Restaurants Available.</div>
        )}
        {favouriteRestaurants.map((restaurant, index) => (
          <div key={index}>
            <div>{restaurant.name}</div>
            <div>{restaurant.favouriteFood}</div>
            <div>{restaurant.rating}</div>
            <div>
              <button onClick={this.handleOnRemoveClick.bind(this, restaurant)}>
                Remove
              </button>
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

const mapActionsToProps = dispatch => ({
  removeRestaurant: restaurant => dispatch(removeRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(RestaurantList);
