const countriesList = require('../countriesList');
const setOrigin = require('./setOrigin');

describe('define the user current location', () => {
  test('if user enter origin as a empty string throw error', () => {
    expect(() => setOrigin('')).toThrow(Error);
  });

  test('if user enter nothing as origin  throw error', () => {
    expect(() => setOrigin()).toThrow(Error);
  });

  test('if user enter valid origin', () => {
    const origin = 'italy';
    const result = setOrigin(origin);
    expect(countriesList).toContain(result);
  });

  test('if user enter origin in upper and lowercase', () => {
    const origin = 'SwEDEN';
    const result = setOrigin(origin);
    expect(countriesList).toContain(result);
  });

  test('if user enter origin with whitespace', () => {
    const origin = 'norway          ';
    const result = setOrigin(origin);
    expect(countriesList).toContain(result);
  });

  test('if user enter origin that does not exists', () => {
    const origin = 'fakeCountry';
    const result = setOrigin(origin);
    expect(result).toBe(false);
  });
});
