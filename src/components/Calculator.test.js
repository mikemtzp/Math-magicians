import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator tests', () => {
  it('Renders Calculator component correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Simulation of user interaction with the calculator: 7', () => {
    render(<Calculator />);
    const keySeven = screen.getByText('7');
    const input = document.querySelector('.input');
    fireEvent.click(keySeven);
    expect(input.textContent).toBe('7');
  });

  it('Simulation of user interaction with the calculator: 9.4', () => {
    render(<Calculator />);
    const keyNine = screen.getByText('9');
    const keyDot = screen.getByText('.');
    const keyFour = screen.getByText('4');
    const input = document.querySelector('.input');
    fireEvent.click(keyNine);
    fireEvent.click(keyDot);
    fireEvent.click(keyFour);
    expect(input.textContent).toBe('9.4');
  });

  it('Simulation of user interaction with the calculator: %', () => {
    render(<Calculator />);
    const keyEight = screen.getByText('8');
    const keyTimes = screen.getByText('x');
    const keySeven = screen.getByText('7');
    const keyEqual = screen.getByText('=');
    const input = document.querySelector('.input');
    fireEvent.click(keyEight);
    fireEvent.click(keyTimes);
    fireEvent.click(keySeven);
    fireEvent.click(keyEqual);
    expect(input.textContent).toBe('56');
  });
});
