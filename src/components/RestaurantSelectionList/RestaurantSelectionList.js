import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-height: 10rem;
  scroll: auto;
`;

const ListItem = styled.div`
  padding: 0.5rem 1rem;
  &:hover {
    background: blue;
    color: white;
  }
`;

const NoItemsText = styled.div`
  color: #ccc;
  text-decoration: italic;
`;

class RestaurantSelectionList extends Component {
  handleOnItemSelect(restaurant) {
    console.log('handleOnItemSelect', restaurant);
  }

  render() {
    const { restaurants } = this.props;
    return (
      <ListContainer>
        {restaurants.length < 1 && (
          <NoItemsText>No items available.</NoItemsText>
        )}
        {restaurants.length > 0 &&
          restaurants.map(restaurant => (
            <ListItem
              key={restaurant.name}
              onClick={this.handleOnItemSelect.bind(this, restaurant)}>
              {restaurant.name}
            </ListItem>
          ))}
      </ListContainer>
    );
  }
}

RestaurantSelectionList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
      })
    })
  )
};

export default RestaurantSelectionList;
