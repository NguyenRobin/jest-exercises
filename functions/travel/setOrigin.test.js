const setOrigin = require('./setOrigin');

test('if user enter origin in upper and lowercase', () => {
  expect(setOrigin('SWEden')).toBe(true);
});

test('if user enter origin with whitespace', () => {
  expect(setOrigin('norway          ')).toBe(true);
});

test('if user enter origin as a empty string', () => {
  expect(setOrigin('')).toBe(false);
});

test('if user enter origin that does not exists', () => {
  expect(setOrigin('unknown secret origin')).toBe(false);
});
