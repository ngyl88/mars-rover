const { readInstructionsToArray, isValidCoordinateInput } = require("./utils");

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
