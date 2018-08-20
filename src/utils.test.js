const { readInstructionsToArray } = require("./utils");

describe("readInstructionsToArray", () => {
  it("should split a series of instructions into each instruction", () => {
    expect(readInstructionsToArray("LMR")).toEqual(["L", "M", "R"]);
  });

  it.skip('invalid instructions', () => {

  })
});
