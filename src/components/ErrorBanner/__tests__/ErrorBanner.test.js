import React from 'react';
import { mount } from 'enzyme';
import ErrorBanner from './../ErrorBanner';
import testProvider from './../../../helpers/testProvider';
import { appError } from './../../../store/restaurants/actions';

describe('should test ErrorBanner component', () => {
  it('should render and initialise the component', () => {
    const { jsx, store } = testProvider(<ErrorBanner />);
    const errorBanner = mount(jsx);
    expect(errorBanner.exists('.ErrorBanner')).toBeFalsy();
  });

  it('should render the banner when message is available', () => {
    const { jsx, store } = testProvider(<ErrorBanner />);
    const errorBanner = mount(jsx);
    expect(errorBanner.exists('.ErrorBanner')).toBeFalsy();
    store.dispatch(appError('Error Message'));
    errorBanner.update();
    expect(errorBanner.exists('.ErrorBanner')).toBeTruthy();
    expect(
      errorBanner
        .find('.ErrorBanner')
        .at(0)
        .text()
    ).toBe('Error Message');
  });
});
