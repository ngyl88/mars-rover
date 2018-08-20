const {
  readInstructionsToArray,
  getCoordinateFromString,
  isValidInitialPositionInput
} = require("./utils");

describe("readInstructionsToArray", () => {
  it("should split a series of instructions into each instruction", () => {
    expect(readInstructionsToArray("LMR")).toEqual(["L", "M", "R"]);
  });

  it.skip("invalid instructions", () => {});
});

describe("getCoordinateFromString", () => {
  it("if valid, should return coordinate", () => {
    expect(getCoordinateFromString("5 5")).toEqual({ x: 5, y: 5 });
  });

  describe("invalid input", () => {
    it("if size have more than 2 spaces", () => {
      expect(() => getCoordinateFromString("5 5 5")).toThrowError("Invalid");
    });
  });
});

describe("isValidInitialPositionInput", () => {
  it("if valid, should return true if initial position is valid", () => {
    expect(isValidInitialPositionInput("1 2 N")).toEqual(true);
  });

  describe("invalid input", () => {
    it("should return false if position entered not having 2 spaces", () => {
      expect(isValidInitialPositionInput("1 2 N N")).toEqual(false);
    });

    it("if position does not start with a valid coordinates", () => {
      expect(() => isValidInitialPositionInput("N 2 N")).toThrowError("Invalid");
    });

    it("should return false if position does not end with a valid orientation", () => {
      expect(isValidInitialPositionInput("2 2 NH")).toEqual(false);
    });
  });
});
