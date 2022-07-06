import calculate from './calculate';

describe('Checks the calculate function', () => {
  const nullObj = {
    total: null,
    next: null,
    operation: null,
  };

  test('that when you click AC it returns a null obj', () => {
    const obj = {
      total: 1,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toStrictEqual(nullObj);
  });

  test('that when you click = it returns the result of the numbers', () => {
    const obj2 = {
      total: 1,
      next: 3,
      operation: '+',
    };
    expect(calculate(obj2, '=')).toStrictEqual({ next: null, operation: null, total: '4' });
  });

  test('that when you click . it lets you add a decimal number', () => {
    expect(calculate(nullObj, '.')).toStrictEqual({ next: '0.', operation: null, total: null });
  });

  test('that when you click +/- it returns the number with a different symbol', () => {
    const obj3 = {
      total: null,
      next: 1,
      operation: null,
    };
    expect(calculate(obj3, '+/-')).toStrictEqual({ next: '-1', operation: null, total: null });
  });
});
