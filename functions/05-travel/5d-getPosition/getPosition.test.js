const setOrigin = require('../5a-setOrigin/setOrigin');
const bookTrip = require('../5b-bookTrip/bookTrip');
const goOnTrip = require('../5c-goOnTrip/goOnTrip');
const getPosition = require('./getPosition');

describe('get current position of the user before a trip', () => {
  test('set the origin', () => {
    expect(setOrigin('sweden')).toBe(true);
  });

  test('position is equal to origin', () => {
    setOrigin('sweden');
    expect(getPosition('sweden')).toBe('sweden');
  });

  test('After trip current position should be equal to destination', () => {
    setOrigin('sweden');
    bookTrip('italy');
    goOnTrip('sweden', 'italy');
    expect(getPosition('italy')).toBe('italy');
  });
});
