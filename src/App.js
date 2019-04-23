import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AddressForm from './components/AddressForm';
import Map from './components/Map';
import RestaurantList from './components/RestaurantList';
import configureStore from './store';

const { store, persistor } = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AddressForm />
          <div>
            <RestaurantList />
            <Map />
          </div>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
