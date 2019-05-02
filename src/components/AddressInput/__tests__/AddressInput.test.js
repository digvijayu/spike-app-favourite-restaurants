import React from 'react';
import reactRenderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddressInput from './../AddressInput';
import testProvider from './../../../helpers/testProvider';

configure({ adapter: new Adapter() });

it('should render the address input', () => {
  const cb = jest.fn();
  const tree = reactRenderer
    .create(<AddressInput name={'Mock Restaurant Name'} onChange={cb} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('should invoke on change when changed', () => {
  const cb = jest.fn();
  const input = mount(
    <AddressInput name={'Mock Restaurant Name'} onChange={cb} />
  );
  input.find('input').simulate('change', { target: { value: 'newVal' } });
  expect(cb.mock.calls.length).toBe(1);
  expect(cb.mock.calls[0][0]).toBe('newVal');
});
