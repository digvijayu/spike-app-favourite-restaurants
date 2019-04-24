import React from 'react';
import { mount } from 'enzyme';
import RestaurantList from './../RestaurantList';
import testProvider from './../../../helpers/testProvider';
import { addRestaurant } from './../../../store/restaurants/actions';

describe('should test RestaurantList component', () => {
  it('should render and initialise the component', () => {
    const { jsx, store } = testProvider(<RestaurantList />);
    const list = mount(jsx);
    expect(list.exists('.RestaurantList__no-items-text')).toBeTruthy();
    expect(list.exists('.RestaurantList__item')).toBeFalsy();
  });

  it.only('should render list items if available', () => {
    const { jsx, store } = testProvider(<RestaurantList />);
    const list = mount(jsx);
    expect(list.exists('.RestaurantList__no-items-text')).toBeTruthy();
    expect(list.exists('.RestaurantList__item')).toBeFalsy();

    store.dispatch(
      addRestaurant({
        name: 'Mock Restaurant Name',
        favouriteFood: 'Burger',
        rating: 5,
        geoLocation: { lat: 0, lng: 0 }
      })
    );

    list.update();

    expect(list.exists('.RestaurantList__no-items-text')).toBeFalsy();
    expect(list.exists('.RestaurantList__item')).toBeTruthy();
  });
});
