import operate from './operate';

describe('Checks the sum, substraction, multiply, module and divide operations', () => {
  test('Checks the sum of two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('Checks the substraction of two numbers', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  test('Checks the multiplication of two numbers', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('Checks the division of two numbers', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('Checks the division can\'t be done by 0', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('Checks the module of two numbers', () => {
    expect(operate(10, 2, '%')).toBe('0');
  });

  test('Checks the module of two numbers', () => {
    expect(operate(10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
