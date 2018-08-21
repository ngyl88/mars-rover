const {
  readInstructionsToArray,
  getLocationFromString,
  getLocationAndOrientationFromString
} = require("./utils");

describe("readInstructionsToArray", () => {
  it("should split a series of instructions into each instruction", () => {
    expect(readInstructionsToArray("LMR")).toEqual(["L", "M", "R"]);
  });

  it("invalid instructions", () => {
    const testFunc = () => readInstructionsToArray("NLMR");
    expect(testFunc).toThrowError("Invalid");
  });
});

describe("getLocationFromString", () => {
  it("if valid, should return location", () => {
    expect(getLocationFromString("5 5")).toEqual({ x: 5, y: 5 });
  });

  describe("invalid input", () => {
    it("if size have more than 2 spaces", () => {
      const testFunc = () => getLocationFromString("5 5 5");
      expect(testFunc).toThrowError("Invalid");
    });
  });
});

describe("getLocationAndOrientationFromString", () => {
  it("if valid, should return location and orientation", () => {
    expect(getLocationAndOrientationFromString("1 2 N")).toEqual({
      location: { x: 1, y: 2 },
      orientation: "N"
    });
  });

  describe("invalid input", () => {
    it("if position entered not having 2 spaces", () => {
      const testFunc = () => getLocationAndOrientationFromString("1 2 N N");
      expect(testFunc).toThrowError("Invalid");
    });

    it("if position does not start with a valid coordinates", () => {
      const testFunc = () => getLocationAndOrientationFromString("N 2 N");
      expect(testFunc).toThrowError("Invalid");
    });

    it("if position does not end with a valid orientation", () => {
      const testFunc = () => getLocationAndOrientationFromString("5 5 SW");
      expect(testFunc).toThrowError("Invalid");
    });
  });
});
