export const appError = message => ({
  type: 'APPLICATION_ERROR',
  message
});

export const changeName = name => ({
  type: 'CHANGE_NAME',
  name
});

export const changeFavouriteFood = favouriteFood => ({
  type: 'CHANGE_FAVOURITE_FOOD',
  favouriteFood
});

export const changeRating = rating => ({
  type: 'CHANGE_RATING',
  rating
});

export const addRestaurant = () => ({
  type: 'ADD_RESTAURANT'
});

export const locateRestaurant = () => ({
  type: 'LOCATE_RESTAURANT'
});

export const restaurantLocationFound = location => ({
  type: 'RESTAURANT_LOCATION_FOUND',
  location
});

export const restaurantLocationError = error => ({
  type: 'RESTAURANT_LOCATION_ERROR',
  error
});

export const removeRestaurant = restaurant => ({
  type: 'REMOVE_RESTAURANT',
  restaurant
});
