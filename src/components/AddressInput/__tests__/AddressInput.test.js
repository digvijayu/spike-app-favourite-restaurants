import React from 'react';
import reactRenderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import AddressInput from './../AddressInput';
import testProvider from './../../../helpers/testProvider';
import mapConfig from './../../../helpers/mapConfig';

mapConfig();

configure({ adapter: new Adapter() });

it('should render the address input', () => {
  const cb = jest.fn();
  const { jsx } = testProvider(
    <AddressInput name={'Mock Restaurant Name'} onChange={cb} />
  );
  const tree = reactRenderer.create(jsx).toJSON();

  expect(tree).toMatchSnapshot();
});
