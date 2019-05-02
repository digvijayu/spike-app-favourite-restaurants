import React from 'react';
import reactRenderer from 'react-test-renderer';
import 'jest-styled-components';
import RestaurantSelectionList from './../RestaurantSelectionList';
import testProvider from './../../../helpers/testProvider';

const mockRestaurantList = [
  {
    name: 'The Salt Room, 106 Kings Rd, Brighton BN1 2FU',
    location: {
      lat: 51.506552,
      lng: -0.099552
    }
  },
  {
    name: 'LEON, 7 Canvey St The Blue Fin Building, London SE1 9AN',
    location: {
      lat: 51.506552,
      lng: -0.099552
    }
  }
];

it('should render the compoenent when items are available in the list', () => {
  const { jsx } = testProvider(
    <RestaurantSelectionList restaurants={mockRestaurantList} />
  );
  const tree = reactRenderer.create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should display no items available message when no items are available', () => {
  const { jsx } = testProvider(<RestaurantSelectionList restaurants={[]} />);
  const tree = reactRenderer.create(jsx).toJSON();
  expect(tree).toMatchSnapshot();
});
