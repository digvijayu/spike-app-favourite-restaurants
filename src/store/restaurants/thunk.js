import Geocode from 'react-geocode';
import {
  locateRestaurant,
  restaurantLocationFound,
  restaurantLocationError
} from './actions';
import { GOOGLE_MAPS_API } from './../../utils/constants';

export const loadLocationThunk = address => async dispatch => {
  dispatch(locateRestaurant());
  loadLocation(address)
    .then(res => {
      const { lat, lng } = res.results[0].geometry.location;
      dispatch(restaurantLocationFound({ lat, lng }));
    })
    .catch(err => dispatch(restaurantLocationError(err)));
};

const loadLocation = address => {
  Geocode.setApiKey(GOOGLE_MAPS_API);
  Geocode.enableDebug();
  return Geocode.fromAddress(address);
};
