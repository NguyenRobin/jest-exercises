const setOrigin = require('../5a-setOrigin/setOrigin');
const bookTrip = require('../5b-bookTrip/bookTrip');
const goOnTrip = require('../5c-goOnTrip/goOnTrip');
const getPosition = require('./getPosition');

describe('get current position of the user before a trip', () => {
  test('if current position is equal to origin', () => {
    const origin = setOrigin('Sweden');
    const position = getPosition('Sweden');
    const result = origin === position;
    expect(result).toBe(true);
  });

  test('current position should be equal to destination after trip', () => {
    const origin = setOrigin('Sweden');
    const destination = bookTrip('Italy');
    let currentPosition = getPosition('Sweden');
    goOnTrip(origin, destination);
    currentPosition = getPosition(destination);
    const result = currentPosition === destination;
    expect(result).toBe(true);
  });
});
