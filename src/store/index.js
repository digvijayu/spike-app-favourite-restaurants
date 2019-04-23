import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './restaurants/reducers';

const rootReducer = combineReducers({
  restaurants: reducer
});

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
