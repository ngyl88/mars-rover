const Location = require('./location');

it("location constructor", () => {
  const location = new Location(3, 5);
  expect(location.x).toBe(3);
  expect(location.y).toBe(5);
});
