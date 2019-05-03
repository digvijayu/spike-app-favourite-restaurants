import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './../App';
import mapConfig from './../helpers/mapConfig';

configure({ adapter: new Adapter() });
mapConfig();

describe('should test the component, App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
