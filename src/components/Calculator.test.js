import React from 'react';
import renderer from 'react-test-renderer';
// import {create, act} from 'react-test-renderer';
import calculate from '../logic/calculate';
import Calculator from './Calculator';

it('Renders Calculator component correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Simulating user interaction', () => {
  const component = renderer.create(<Calculator />);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.updateCalc('8');
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});