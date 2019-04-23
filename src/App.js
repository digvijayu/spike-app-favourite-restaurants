import React from 'react';
import { Provider } from 'react-redux';
import AddressForm from './components/AddressForm';
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddressForm />
      </Provider>
    </div>
  );
}

export default App;
