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

export const locateRestaurant = () => ({
  type: 'LOCATE_RESTAURANT'
});

export const addRestaurant = () => ({
  type: 'ADD_RESTAURANT'
});
