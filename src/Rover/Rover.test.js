const Rover = require("./Rover");

it("Rover constructor", () => {
  const rover = new Rover(0, 0, "N");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
  expect(rover.orientation).toBe("N");
});

it("printCurrentPosition()", () => {
  const rover = new Rover(0, 0, "N");
  expect(rover.printCurrentPosition()).toBe("0 0 N");
});

describe("Instructions", () => {
  describe("L:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(0, 0, "N");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });
    
    it.skip("current orientation: S", () => {
      let rover = new Rover(0, 0, "S");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });
  });

  describe.skip("process R instructions", () => {});

  describe.skip("process M instructions", () => {});
});
