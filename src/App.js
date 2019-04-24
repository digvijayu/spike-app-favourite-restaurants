import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled, { createGlobalStyle } from 'styled-components';
import AddressForm from './components/AddressForm';
import Map from './components/Map';
import RestaurantList from './components/RestaurantList';
import ErrorBanner from './components/ErrorBanner';
import configureStore from './store';

const { store, persistor } = configureStore();

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
    margin: 0;
  }
`;

const AppContainer = styled.div`
  font-family: 'Roboto', Arial, sans-serif;
`;

const AppLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 25%;
  min-width: 250px;
  box-shadow: 0 0 1rem 0.1rem #ccc;
  z-index: 1;
`;

const RightContainer = styled.div`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBanner />
          <AppLayout>
            <LeftContainer>
              <AddressForm />
              <RestaurantList />
            </LeftContainer>
            <RightContainer>
              <Map />
            </RightContainer>
          </AppLayout>
        </PersistGate>
      </Provider>
    </AppContainer>
  );
}

export default App;
