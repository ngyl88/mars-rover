const {
  readInstructionsToArray,
  getCoordinateFromString,
  getCoordinateAndOrientationFromString
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
      const testFunc = () => getCoordinateFromString("5 5 5");
      expect(testFunc).toThrowError("Invalid");
    });
  });
});

describe("getCoordinateAndOrientationFromString", () => {
  it("if valid, should return coordinate and orientation", () => {
    expect(getCoordinateAndOrientationFromString("1 2 N")).toEqual({
      coordinate: { x: 1, y: 2 },
      orientation: "N"
    });
  });

  describe("invalid input", () => {
    it("if position entered not having 2 spaces", () => {
      const testFunc = () => getCoordinateAndOrientationFromString("1 2 N N");
      expect(testFunc).toThrowError("Invalid");
    });

    it("if position does not start with a valid coordinates", () => {
      const testFunc = () => getCoordinateAndOrientationFromString("N 2 N");
      expect(testFunc).toThrowError("Invalid");
    });

    it("if position does not end with a valid orientation", () => {
      const testFunc = () => getCoordinateAndOrientationFromString("5 5 SW");
      expect(testFunc).toThrowError("Invalid");
    });
  });
});
