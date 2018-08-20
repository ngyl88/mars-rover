const { readInstructionsToArray } = require("./utils");

describe("readInstructionsToArray", () => {
  it("should split a series of instructions into each instruction", () => {
    expect(readInstructionsToArray("LML")).toEqual(["L", "M", "L"]);
  });
});
