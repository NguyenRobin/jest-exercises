const bookTrip = require('./bookTrip');

test('valid destination should be successfully', () => {
  expect(bookTrip('denmark')).toBe(true);
});

test('valid destination in lowercase or uppercase should be successfully', () => {
  expect(bookTrip('SWEden')).toBe(true);
});

test('valid destination with whitespaces should be successfully', () => {
  expect(bookTrip('norway          ')).toBe(true);
});

test('should be able to book with destination with empty string', () => {
  expect(bookTrip('')).toBe(false);
});

test('destination that does not exist', () => {
  expect(bookTrip('unknown')).toBe(false);
});
