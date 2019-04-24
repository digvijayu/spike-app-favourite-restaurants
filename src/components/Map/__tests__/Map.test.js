import React from 'react';
import { mount } from 'enzyme';
import Map from './../Map';
import testProvider from './../../../helpers/testProvider';

describe('should test ErrorBanner component', () => {
  it('should render and initialise the component', () => {
    const { jsx, store } = testProvider(<Map />);
    const map = mount(jsx);
    expect(map.exists('.Map__google-map')).toBeTruthy();
  });
});
