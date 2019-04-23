import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import reducer from './restaurants/reducers';

const initialState = {};

const rootReducer = combineReducers({
  restaurants: reducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
