const isWaterBoiling = require('./isWaterBoiling');

test('Water should be boiling over 100 degrees celsius', () => {
  const celsius = 100;

  expect(isWaterBoiling(celsius)).toBe(true);
  expect(() => isWaterBoiling(99)).toThrow(Error);
});
