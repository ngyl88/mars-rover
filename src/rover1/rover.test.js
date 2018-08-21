const Rover = require("./rover");

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

describe("Single Instruction", () => {
  describe("L:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(0, 0, "N");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: S", () => {
      let rover = new Rover(0, 0, "S");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: E", () => {
      let rover = new Rover(0, 0, "E");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });

    it("current orientation: W", () => {
      let rover = new Rover(0, 0, "W");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });
  });

  describe("R:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(0, 0, "N");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: S", () => {
      let rover = new Rover(0, 0, "S");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: E", () => {
      let rover = new Rover(0, 0, "E");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });

    it("current orientation: W", () => {
      let rover = new Rover(0, 0, "W");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });
  });

  describe("M:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(0, 0, "N");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("0 1 N");
    });

    it("current orientation: S", () => {
      let rover = new Rover(0, 1, "S");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });

    it("current orientation: E", () => {
      let rover = new Rover(0, 0, "E");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("1 0 E");
    });

    it("current orientation: W", () => {
      let rover = new Rover(1, 0, "W");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });
  });
});

describe("Multiple Instructions", () => {
  it("rover #1", () => {
    const rover = new Rover(1, 2, "N");
    rover.receiveInstructions("LMLMLMLMM");

    expect(rover.printCurrentPosition()).toBe("1 3 N");
  });
});
