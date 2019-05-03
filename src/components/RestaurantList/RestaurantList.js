import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  removeRestaurant,
  selectRestaurant
} from './../../store/restaurants/actions';
import { getStars } from './../../utils/Star';

const RestaurantListItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 2.5rem 1rem 1rem;
  position: relative;
  cursor: pointer;
  background: ${props => (props.isSelected ? '#60a3bc' : 'inherit')};
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
  border: 2px solid #ff9494;
  background: inherit;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: calc(50% - 1rem);
  height: 2rem;
  width: 2rem;
  font-weight: bold;

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
  handleOnRemoveClick(restaurant, e) {
    e.stopPropagation();
    this.props.removeRestaurant(restaurant);
  }

  handleOnSelectClick(restaurant) {
    this.props.selectRestaurant(restaurant);
  }

  render() {
    const { favouriteRestaurants } = this.props;
    return (
      <div>
        {favouriteRestaurants.length < 1 && (
          <NoItems className="RestaurantList__no-items-text">
            No Favourite Restaurants Available.
          </NoItems>
        )}
        {favouriteRestaurants.map((restaurant, index) => (
          <RestaurantListItem
            className="RestaurantList__item"
            key={index}
            isSelected={restaurant.isSelected}
            onClick={this.handleOnSelectClick.bind(this, restaurant)}>
            <RestaurantTitle className="RestaurantList__item-name">
              {restaurant.name}
            </RestaurantTitle>
            <RestaurantFood className="RestaurantList__item-favourite-food">
              {restaurant.favouriteFood}
            </RestaurantFood>
            <RestaurantRating className="RestaurantList__item-rating">
              {getStars(restaurant.rating)}
            </RestaurantRating>
            <RemoveButton
              className="RestaurantList__item-remove"
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
  removeRestaurant: restaurant => dispatch(removeRestaurant(restaurant)),
  selectRestaurant: restaurant => dispatch(selectRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(RestaurantList);
