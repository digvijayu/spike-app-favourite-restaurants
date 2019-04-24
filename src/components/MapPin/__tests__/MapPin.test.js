import React from 'react';
import { mount } from 'enzyme';
import MapPin from './../MapPin';
import './../../../helpers/testProvider';
import { appError } from './../../../store/restaurants/actions';

describe('should test MapPin component', () => {
  it('should render and initialise the component', () => {
    //const { jsx, store } = testProvider(<MapPin />);
    const pin = mount(<MapPin restaurant={{ name: 'mock-name' }} />);
    expect(pin.exists('.MapPin__image')).toBeTruthy();
  });
});
