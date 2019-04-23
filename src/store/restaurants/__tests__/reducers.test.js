import jest from 'jest';
import { initialAppState, reducer } from './../reducers';
import {
  appError,
  changeName,
  changeFavouriteFood,
  changeRating,
  locateRestaurant,
  addRestaurant
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
      }
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
          name: 'Burger Palace',
          favouriteFood: 'Burger',
          rating: 4,
          geoLocation: { lat: 0, long: 0 }
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
});
