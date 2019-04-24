import React from 'react';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from './../store';

configure({ adapter: new Adapter() });

function testProvider(component) {
  const { store } = configureStore();
  const jsx = (
    <Provider store={store}>{React.cloneElement(component)}</Provider>
  );
  return {
    jsx,
    store
  };
}

export default testProvider;
