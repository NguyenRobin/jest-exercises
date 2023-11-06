const convertIntToRoman = require('./convertIntToRoman');

test('Convert integer to roman numerals', () => {
  expect(convertIntToRoman(1)).toBe('I');
  expect(convertIntToRoman(8)).toBe('VIII');
  expect(convertIntToRoman(15)).toBe('XV');
  expect(convertIntToRoman(13)).toBe('XIII');
});
