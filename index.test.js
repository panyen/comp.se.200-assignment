const { addNumbers } = require("./index");

test('adds 2 + 3 to equal 5', () => {
  expect(addNumbers(2, 3)).toBe(5);
});
