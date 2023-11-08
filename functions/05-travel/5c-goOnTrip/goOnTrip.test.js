const setOrigin = require('../5a-setOrigin/setOrigin');
const bookTrip = require('../5b-bookTrip/bookTrip');
const countriesList = require('../countriesList');
const goOnTrip = require('./goOnTrip');

describe('Travel from an origin to a destination', () => {
  test('When origin and destination is not defined', () => {
    expect(() => goOnTrip()).toThrow(Error);
  });

  test('When origin is valid and destination not defined', () => {
    expect(() => goOnTrip('sweden', '')).toThrow(Error);
  });

  test('When destination is valid and origin not defined', () => {
    expect(() => goOnTrip('', 'italy')).toThrow(Error);
  });

  test('When both origin and destination is set but does not exist', () => {
    const result = goOnTrip('work', 'home');
    expect(result).toBe(false);
  });

  test('When origin is valid and destination valid', () => {
    const origin = setOrigin('sweden');
    const destination = bookTrip('italy');
    expect(goOnTrip(origin, destination)).toBe(true);
  });

  // test('Throw error if origin or destination is missing', () => {
  //   expect(() => goOnTrip()).toThrow(Error);
  // });

  // test('Throw error if origin or destination is an empty string', () => {
  //   setOrigin('')
  //   bookTrip('')

  //   expect(() => setOrigin('')).toThrow(Error);
  //   expect(() => bookTrip('')).toThrow(Error);
  // });

  // test('Returns false if origin and destination have been set, but have incorrect values', () => {
  //   expect(setOrigin('I have no origin')).toBe(false);
  //   expect(bookTrip('I have no destination')).toBe(false);
  // });

  // test('Returns true if origin and destination have been set with correct values', () => {
  //   expect(setOrigin('sweden')).toBe(true);
  //   expect(bookTrip('italy')).toBe(true);
  // });
});
