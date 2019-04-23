export const initialAppState = {
  error: {
    message: ''
  },
  favouriteRestaurants: [],
  newRestaurant: {
    name: '',
    favouriteFood: '',
    rating: 0,
    geoLocation: null
  }
};

export const reducer = (
  state = initialAppState,
  action = { type: 'NO_TYPE' }
) => {
  switch (action.type) {
    case 'APPLICATION_ERROR':
      return {
        ...state,
        error: { message: action.message }
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        newRestaurant: {
          ...state.newRestaurant,
          name: action.name,
          geoLocation: null
        }
      };
    case 'CHANGE_FAVOURITE_FOOD':
      return {
        ...state,
        newRestaurant: {
          ...state.newRestaurant,
          favouriteFood: action.favouriteFood
        }
      };
    case 'CHANGE_RATING':
      return {
        ...state,
        newRestaurant: {
          ...state.newRestaurant,
          rating: action.rating
        }
      };
    case 'LOCATE_RESTAURANT':
      return {
        ...state
      };
    case 'ADD_RESTAURANT':
      return {
        ...state,
        favouriteRestaurants: [
          ...state.favouriteRestaurants,
          { ...state.newRestaurant }
        ],
        newRestaurant: {
          name: '',
          favouriteFood: '',
          rating: 0,
          geoLocation: null
        }
      };
    default:
      return state;
  }
};

export default reducer;
