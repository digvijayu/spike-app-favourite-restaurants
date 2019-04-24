import jest from 'jest';
import {
  appError,
  changeName,
  changeFavouriteFood,
  changeRating,
  addRestaurant,
  locateRestaurant,
  restaurantLocationFound,
  restaurantLocationError,
  removeRestaurant,
  selectRestaurant
} from './../actions';

describe('should test actions', () => {
  test('should counstuct action, appError', () => {
    expect(appError('Random test error message.')).toEqual({
      type: 'APPLICATION_ERROR',
      message: 'Random test error message.'
    });
  });

  test('should counstuct action, changeName', () => {
    expect(changeName('Express Pizza, London')).toEqual({
      type: 'CHANGE_NAME',
      name: 'Express Pizza, London'
    });
  });

  test('should counstuct action, changeFavouriteFood', () => {
    expect(changeFavouriteFood('Burger')).toEqual({
      type: 'CHANGE_FAVOURITE_FOOD',
      favouriteFood: 'Burger'
    });
  });

  test('should counstuct action, changeRating', () => {
    expect(changeRating(4)).toEqual({
      type: 'CHANGE_RATING',
      rating: 4
    });
  });

  test('should counstuct action, locateRestaurant', () => {
    expect(locateRestaurant()).toEqual({
      type: 'LOCATE_RESTAURANT'
    });
  });

  test('should counstuct action, addRestaurant', () => {
    expect(addRestaurant()).toEqual({
      type: 'ADD_RESTAURANT'
    });
  });

  test('should counstuct action, restaurantLocationFound', () => {
    expect(restaurantLocationFound({ lat: 0, long: 0 })).toEqual({
      type: 'RESTAURANT_LOCATION_FOUND',
      location: { lat: 0, long: 0 }
    });
  });

  test('should counstuct action, restaurantLocationError', () => {
    expect(restaurantLocationError({ mock: 'error' })).toEqual({
      type: 'RESTAURANT_LOCATION_ERROR',
      error: { mock: 'error' }
    });
  });

  test('should counstuct action, removeRestaurant', () => {
    expect(removeRestaurant({ mock: 'restaurant' })).toEqual({
      type: 'REMOVE_RESTAURANT',
      restaurant: { mock: 'restaurant' }
    });
  });

  test('should counstuct action, removeRestaurant', () => {
    expect(selectRestaurant({ mock: 'restaurant' })).toEqual({
      type: 'SELECT_RESTAURANT',
      restaurant: { mock: 'restaurant' }
    });
  });
});
