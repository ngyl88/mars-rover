const { NORTH, SOUTH, EAST, WEST } = require("./orientation");
const { isValidOrientation, rotate } = require("./orientation");

it("should return true if input is valid", () => {
  expect(isValidOrientation("N")).toBe(true);
  expect(isValidOrientation("S")).toBe(true);
  expect(isValidOrientation("E")).toBe(true);
  expect(isValidOrientation("W")).toBe(true);
});

it("should return false if input is not a single character", () => {
  expect(isValidOrientation("NS")).toBe(false);
  expect(isValidOrientation("E W")).toBe(false);
  expect(isValidOrientation("1")).toBe(false);
});

it("rotate", () => {
  expect(rotate("L", NORTH)).toBe(WEST);
  expect(rotate("L", SOUTH)).toBe(EAST);
  expect(rotate("L", EAST)).toBe(NORTH);
  expect(rotate("L", WEST)).toBe(SOUTH);

  expect(rotate("R", NORTH)).toBe(EAST);
  expect(rotate("R", SOUTH)).toBe(WEST);
  expect(rotate("R", EAST)).toBe(SOUTH);
  expect(rotate("R", WEST)).toBe(NORTH);
});
