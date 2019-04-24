import React from 'react';
import { mount } from 'enzyme';
import AddressForm from './../AddressForm';
import testProvider from './../../../helpers/testProvider';

describe('should test AddressForm component', () => {
  it('should render and initialise the component', () => {
    const { jsx, store } = testProvider(<AddressForm />);
    const addressForm = mount(jsx);
    expect(addressForm.exists('.AddressForm__name-input')).toBeTruthy();
    expect(addressForm.exists('.AddressForm__locate-button')).toBeTruthy();
    expect(
      addressForm.exists('.AddressForm__favourite-food-input')
    ).toBeTruthy();
    expect(addressForm.exists('.AddressForm__rating-input')).toBeTruthy();
    expect(
      addressForm.exists('.AddressForm__add-to-favourite-button')
    ).toBeTruthy();
  });
});
