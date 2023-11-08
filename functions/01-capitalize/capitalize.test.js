const capitalize = require('./capitalize');

test('Convert first letter of string to title case', () => {
  const input = 'hello world';
  const expectedResult = 'Hello World';
  const result = capitalize(input);

  expect(result).toBe(expectedResult);
});
