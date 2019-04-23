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
  },
  loadingGeoLocation: false
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
        ...state,
        loadingGeoLocation: true
      };
    case 'RESTAURANT_LOCATION_FOUND':
      return {
        ...state,
        newRestaurant: {
          ...state.newRestaurant,
          geoLocation: action.location
        },
        loadingGeoLocation: false
      };
    case 'RESTAURANT_LOCATION_ERROR':
      return {
        ...state,
        newRestaurant: {
          ...state.newRestaurant,
          geoLocation: null
        },
        error: { message: 'Error while fetching the location.' },
        loadingGeoLocation: false
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
    case 'REMOVE_RESTAURANT':
      return {
        ...state,
        favouriteRestaurants: state.favouriteRestaurants.filter(
          restaurant => restaurant.name !== action.restaurant.name
        )
      };
    default:
      return state;
  }
};

export default reducer;
