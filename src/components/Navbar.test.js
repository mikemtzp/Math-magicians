import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

it('Renders Navbar component correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
        {' '}
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
