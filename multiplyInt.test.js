const multiplyInt = require('./multiplyInt');

test('multiplies 1 * 2 to equal 2', () => {
  expect(multiplyInt(1, 2)).toBe(2);
});

test('multiplies 1 * -3 to equal -3', () => {
    expect(multiplyInt(1, -3)).toBe(-3);
  });

  test('multiplies 0 * -3 to equal 0', () => {
    expect(multiplyInt(0, -3)).toBe(-0);
  });

  test('multiplies a * b to equal wrong input', () => {
    expect(multiplyInt("a", "b")).toBe(false);
  });

  test('multiplies 100 * -3 to equal -300', () => {
    expect(multiplyInt(100, -3)).toBe(-300);
  });
