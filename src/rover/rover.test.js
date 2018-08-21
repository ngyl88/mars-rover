const Rover = require("./rover");
const Location = require("../location");

let location00, location01, location10;
beforeEach(() => {
  location00 = new Location(0, 0);
  location01 = new Location(0, 1);
  location10 = new Location(1, 0);
});

it("Rover constructor", () => {
  const rover = new Rover(location00, "N");
  expect(rover.location).toBe(location00);
  expect(rover.orientation).toBe("N");
});

it("printCurrentPosition()", () => {
  const rover = new Rover(location00, "N");
  expect(rover.printCurrentPosition()).toBe("0 0 N");
});

describe("processInstruction - Single Instruction", () => {
  describe("L:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(location00, "N");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: S", () => {
      let rover = new Rover(location00, "S");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: E", () => {
      let rover = new Rover(location00, "E");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });

    it("current orientation: W", () => {
      let rover = new Rover(location00, "W");
      rover.processInstruction("L");

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });
  });

  describe("R:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(location00, "N");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: S", () => {
      let rover = new Rover(location00, "S");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: E", () => {
      let rover = new Rover(location00, "E");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });

    it("current orientation: W", () => {
      let rover = new Rover(location00, "W");
      rover.processInstruction("R");

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });
  });

  describe("M:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(location00, "N");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("0 1 N");
    });

    it("current orientation: S", () => {
      let rover = new Rover(location01, "S");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });

    it("current orientation: E", () => {
      const rover = new Rover(location00, "E");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("1 0 E");
    });

    it("current orientation: W", () => {
      let rover = new Rover(location10, "W");
      rover.processInstruction("M");

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });
  });
});
