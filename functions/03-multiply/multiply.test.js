const multiply = require('./multiply');

test('Multiply two numbers', () => {
  // Arrange: förberedande fasen där du ställer in din testmiljö.
  const num1 = 5;
  const num2 = 10;
  const expectedSum = 50;

  // Act: utför du den faktiska operationen som du vill testa
  const result = multiply(num1, num2);

  // Assert: utvärderar du resultatet av den tidigare utförda åtgärden och verifierar om resultatet är korrekt enligt dina förväntningar
  expect(result).toBe(expectedSum);
});
