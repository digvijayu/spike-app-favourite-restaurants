import jest from 'jest';
import { initialAppState, reducer } from './../reducers';
import {
  appError,
  changeName,
  changeFavouriteFood,
  changeRating,
  locateRestaurant,
  addRestaurant,
  restaurantLocationFound,
  restaurantLocationError,
  removeRestaurant,
  selectRestaurant
} from './../actions';

describe('should test reducer', () => {
  it('should verify the initial state', () => {
    let expected = {
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
    expect(initialAppState).toEqual(expected);
  });

  it('should return the default state', () => {
    const newState = reducer();
    expect(newState).toEqual(initialAppState);
  });

  it('should reduce the application error action with custom state', () => {
    const newState = reducer(initialAppState, appError('Some Message 1'));
    expect(newState).toEqual({
      ...initialAppState,
      error: { message: 'Some Message 1' }
    });
  });

  it('should change the name and reset the geo location to null', () => {
    const newState = reducer(
      {
        ...initialAppState,
        newRestaurant: {
          ...initialAppState.newRestaurant,
          name: 'Some other restaurant, London',
          geoLocation: { mock: 'location object' }
        }
      },
      changeName('Express Pizza, London')
    );
    expect(newState).toEqual({
      ...initialAppState,
      newRestaurant: {
        ...initialAppState.newRestaurant,
        name: 'Express Pizza, London',
        geoLocation: null
      }
    });
  });

  it('should change the name and reset the geo location to null', () => {
    const newState = reducer(
      {
        ...initialAppState,
        newRestaurant: {
          ...initialAppState.newRestaurant,
          name: 'Some other restaurant, London',
          geoLocation: { mock: 'location object' }
        }
      },
      changeName('Express Pizza, London')
    );
    expect(newState).toEqual({
      ...initialAppState,
      newRestaurant: {
        ...initialAppState.newRestaurant,
        name: 'Express Pizza, London',
        geoLocation: null
      }
    });
  });

  it('should change the favourite food of new restaurant', () => {
    const newState = reducer(
      {
        ...initialAppState,
        newRestaurant: {
          ...initialAppState.newRestaurant,
          favouriteFood: 'some other food'
        }
      },
      changeFavouriteFood('Burger')
    );
    expect(newState).toEqual({
      ...initialAppState,
      newRestaurant: {
        ...initialAppState.newRestaurant,
        favouriteFood: 'Burger'
      }
    });
  });

  it('should change the rating of the new restaurant', () => {
    const newState = reducer(
      {
        ...initialAppState,
        newRestaurant: {
          ...initialAppState.newRestaurant,
          rating: 2
        }
      },
      changeRating(4)
    );
    expect(newState).toEqual({
      ...initialAppState,
      newRestaurant: {
        ...initialAppState.newRestaurant,
        rating: 4
      }
    });
  });

  it('should allow user to add new restaurant', () => {
    const prevState = {
      ...initialAppState,
      favouriteRestaurants: [
        {
          name: 'some other selected place',
          favouriteFood: 'Burger',
          rating: 4,
          geoLocation: { lat: 0, long: 0 },
          isSelected: true
        }
      ],
      newRestaurant: {
        name: 'Burger Palace',
        favouriteFood: 'Burger',
        rating: 4,
        geoLocation: { lat: 0, long: 0 }
      }
    };
    const newState = reducer(prevState, addRestaurant());

    expect(newState).toEqual({
      ...prevState,
      favouriteRestaurants: [
        {
          name: 'some other selected place',
          favouriteFood: 'Burger',
          rating: 4,
          geoLocation: { lat: 0, long: 0 },
          isSelected: false
        },
        {
          name: 'Burger Palace',
          favouriteFood: 'Burger',
          rating: 4,
          geoLocation: { lat: 0, long: 0 },
          isSelected: true
        }
      ],
      newRestaurant: {
        name: '',
        favouriteFood: '',
        rating: 0,
        geoLocation: null
      }
    });
  });

  it('should set loading when location is being searched', () => {
    const prevState = {
      ...initialAppState
    };
    const newState = reducer(prevState, locateRestaurant());

    expect(newState).toEqual({
      ...prevState,
      loadingGeoLocation: true
    });
  });

  it('should set location when found', () => {
    const prevState = {
      ...initialAppState,
      newRestaurant: {
        name: 'Burger Palace',
        favouriteFood: 'Burger',
        rating: 4,
        geoLocation: null
      }
    };
    const newState = reducer(
      prevState,
      restaurantLocationFound({ lat: 0, long: 0 })
    );

    expect(newState).toEqual({
      ...prevState,
      newRestaurant: {
        ...prevState.newRestaurant,
        geoLocation: { lat: 0, long: 0 }
      },
      loadingGeoLocation: false
    });
  });

  it('should register an error when there is an error on loading location', () => {
    const prevState = {
      ...initialAppState,
      newRestaurant: {
        name: 'Burger Palace',
        favouriteFood: 'Burger',
        rating: 4,
        geoLocation: null
      }
    };
    const newState = reducer(
      prevState,
      restaurantLocationError({ mock: 'error' })
    );

    expect(newState).toEqual({
      ...prevState,
      error: {
        message:
          'Either the location does not exist or there was an error while fetching the location.'
      }
    });
  });

  it('should remove a restaurant from the list', () => {
    const prevState = {
      ...initialAppState,
      favouriteRestaurants: [
        {
          name: 'Burger Palace',
          favouriteFood: 'Burger',
          rating: 4,
          geoLocation: null
        }
      ]
    };
    const newState = reducer(
      prevState,
      removeRestaurant({
        name: 'Burger Palace',
        favouriteFood: 'Burger',
        rating: 4,
        geoLocation: null
      })
    );

    expect(newState).toEqual({
      ...prevState,
      favouriteRestaurants: []
    });
  });

  it('should select a restaurant from the list', () => {
    const prevState = {
      ...initialAppState,
      favouriteRestaurants: [
        {
          name: 'Burger Palace',
          favouriteFood: 'Burger',
          rating: 4,
          geoLocation: null,
          isSelected: false
        }
      ]
    };
    const newState = reducer(
      prevState,
      selectRestaurant({
        name: 'Burger Palace',
        favouriteFood: 'Burger',
        rating: 4,
        geoLocation: null
      })
    );

    expect(newState).toEqual({
      ...prevState,
      favouriteRestaurants: [
        {
          name: 'Burger Palace',
          favouriteFood: 'Burger',
          rating: 4,
          geoLocation: null,
          isSelected: true
        }
      ]
    });
  });
});
