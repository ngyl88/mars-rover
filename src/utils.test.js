const { readInstructionsToArray, isValidCoordinateInput, isValidInitialPositionInput } = require("./utils");

describe("readInstructionsToArray", () => {
  it("should split a series of instructions into each instruction", () => {
    expect(readInstructionsToArray("LMR")).toEqual(["L", "M", "R"]);
  });

  it.skip("invalid instructions", () => {});
});

describe("isValidCoordinateInput", () => {
  it("should return true if sizing is valid", () => {
    expect(isValidCoordinateInput("5 5")).toEqual(true);
  });

  it("should return false if size have more than 2 spaces", () => {
    expect(isValidCoordinateInput("5 5 5")).toEqual(false);
  });
});

describe("isValidInitialPositionInput", () => {
  it("should return true if initial position is valid", () => {
    expect(isValidInitialPositionInput("1 2 N")).toEqual(true);
  });

  it("should return false if position entered not having 2 spaces", () => {
    expect(isValidInitialPositionInput("1 2 N N")).toEqual(false);
  });

  it("should return false if position does not start with a valid coordinates", () => {
    expect(isValidInitialPositionInput("N 2 N")).toEqual(false);
  });

  it("should return false if position does not end with a valid orientation", () => {
    expect(isValidInitialPositionInput("2 2 NH")).toEqual(false);
  });
});
