const {
  isValidOrientation,
  rotateLeft,
  rotateRight
} = require("./orientation");

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

describe("rotate", () => {
  it("rotateLeft", () => {
    expect(rotateLeft("N")).toBe("W");
    expect(rotateLeft("S")).toBe("E");
    expect(rotateLeft("E")).toBe("N");
    expect(rotateLeft("W")).toBe("S");
  });

  it("rotateRight", () => {
    expect(rotateRight("N")).toBe("E");
    expect(rotateRight("S")).toBe("W");
    expect(rotateRight("E")).toBe("S");
    expect(rotateRight("W")).toBe("N");
  });
});
