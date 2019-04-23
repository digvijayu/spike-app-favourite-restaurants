import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeRestaurant } from './../../store/restaurants/actions';

const RestaurantListItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  position: relative;
`;

const RestaurantTitle = styled.div`
  font-size: 1rem;
`;

const RestaurantFood = styled.div`
  color: #aaa;
  font-size: 0.7rem;
  margin-top: 0.3rem;
`;

const RestaurantRating = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
  margin-top: 0.3rem;
`;

const RemoveButton = styled.button`
  color: #ff9494;
  border: 1px solid #ff9494;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: calc(50% - 1rem);
  height: 2rem;
  width: 2rem;

  &:hover {
    background: #ff9494;
    color: #fff;
  }
`;

const NoItems = styled.div`
  color: #ccc;
  padding: 1rem;
`;

class RestaurantList extends Component {
  handleOnRemoveClick(restaurant) {
    this.props.removeRestaurant(restaurant);
  }

  render() {
    const { favouriteRestaurants } = this.props;
    return (
      <div>
        {favouriteRestaurants.length < 1 && (
          <NoItems>No Favourite Restaurants Available.</NoItems>
        )}
        {favouriteRestaurants.map((restaurant, index) => (
          <RestaurantListItem key={index}>
            <RestaurantTitle>{restaurant.name}</RestaurantTitle>
            <RestaurantFood>{restaurant.favouriteFood}</RestaurantFood>
            <RestaurantRating>{restaurant.rating}</RestaurantRating>
            <RemoveButton
              onClick={this.handleOnRemoveClick.bind(this, restaurant)}>
              X
            </RemoveButton>
          </RestaurantListItem>
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
