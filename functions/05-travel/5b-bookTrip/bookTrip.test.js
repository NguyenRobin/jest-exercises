const setOrigin = require('../5a-setOrigin/setOrigin');
const bookTrip = require('./bookTrip');

describe('book a trip (buy a ticket) to the destination', () => {
  test('origin and destination cannot be the same', () => {
    const origin = setOrigin('sweden');
    const destination = bookTrip('italy');

    expect(destination).not.toBe(origin);
  });

  test('destination that does not exist', () => {
    const destination = bookTrip('fakeDestination');
    expect(destination).toBe(false);
  });

  test('should be able to book with destination with empty string', () => {
    expect(() => bookTrip('')).toThrow(Error);
  });

  test('valid destination with whitespaces should be successfully', () => {
    const result = bookTrip('norway          ');
    expect(result).toBe(result);
  });
});
