const Rover = require("./rover");
const Location = require("../location");

let location00, location01, location10, location11;
let boundary22, boundary11;

beforeEach(() => {
  location00 = new Location(0, 0);
  location01 = new Location(0, 1);
  location10 = new Location(1, 0);
  location11 = new Location(1, 1);

  boundary22 = new Location(2, 2);
  boundary11 = new Location(1, 1);
});

it("Rover constructor", () => {
  const rover = new Rover(location00, "N");
  expect(rover.location).toBe(location00);
  expect(rover.orientation).toBe("N");
});

it("Getter lastPosition", () => {
  const rover = new Rover(location00, "N");
  expect(rover.lastPosition).toBe("0 0 N");
});

describe("printCurrentPosition()", () => {
  it("if not rip", () => {
    const rover = new Rover(location00, "N");
    expect(rover.printCurrentPosition()).toBe("0 0 N");
  });

  it("if rip", () => {
    const rover = new Rover(location00, "N");
    rover.rip = true;
    expect(rover.printCurrentPosition()).toBe("0 0 N RIP");
  });
});

describe("processInstruction - Single Instruction", () => {
  describe("state change after L:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(location00, "N");
      rover.processInstruction("L", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: S", () => {
      let rover = new Rover(location00, "S");
      rover.processInstruction("L", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: E", () => {
      let rover = new Rover(location00, "E");
      rover.processInstruction("L", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });

    it("current orientation: W", () => {
      let rover = new Rover(location00, "W");
      rover.processInstruction("L", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });
  });

  describe("state change after R:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(location00, "N");
      rover.processInstruction("R", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: S", () => {
      let rover = new Rover(location00, "S");
      rover.processInstruction("R", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: E", () => {
      let rover = new Rover(location00, "E");
      rover.processInstruction("R", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });

    it("current orientation: W", () => {
      let rover = new Rover(location00, "W");
      rover.processInstruction("R", boundary22);

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });
  });

  describe("state change after M:", () => {
    describe("within boundary", () => {
      it("current orientation: N", () => {
        let rover = new Rover(location00, "N");
        rover.processInstruction("M", boundary22);

        expect(rover.printCurrentPosition()).toBe("0 1 N");
        expect(rover.rip).toBe(false);
      });

      it("current orientation: S", () => {
        let rover = new Rover(location01, "S");
        rover.processInstruction("M", boundary22);

        expect(rover.printCurrentPosition()).toBe("0 0 S");
        expect(rover.rip).toBe(false);
      });

      it("current orientation: E", () => {
        const rover = new Rover(location00, "E");
        rover.processInstruction("M", boundary22);

        expect(rover.printCurrentPosition()).toBe("1 0 E");
        expect(rover.rip).toBe(false);
      });

      it("current orientation: W", () => {
        let rover = new Rover(location10, "W");
        rover.processInstruction("M", boundary22);

        expect(rover.printCurrentPosition()).toBe("0 0 W");
        expect(rover.rip).toBe(false);
      });
    });

    describe("beyond boundary", () => {
      it("current orientation: N", () => {
        let rover = new Rover(location11, "N");
        rover.processInstruction("M", boundary11);

        expect(rover.printCurrentPosition()).toBe("1 1 N RIP");
        expect(rover.rip).toBe(true);
      });

      it("current orientation: E", () => {
        const rover = new Rover(location11, "E");
        rover.processInstruction("M", boundary11);

        expect(rover.printCurrentPosition()).toBe("1 1 E RIP");
        expect(rover.rip).toBe(true);
      });

      it("current orientation: S", () => {
        let rover = new Rover(location00, "S");
        rover.processInstruction("M", boundary11);

        expect(rover.printCurrentPosition()).toBe("0 0 S RIP");
        expect(rover.rip).toBe(true);
      });

      it("current orientation: W", () => {
        let rover = new Rover(location00, "W");
        rover.processInstruction("M", boundary11);

        expect(rover.printCurrentPosition()).toBe("0 0 W RIP");
        expect(rover.rip).toBe(true);
      });
    });
  });

  describe('return value of L/R/M', () => {
    it("L", () => {
      let rover = new Rover(location00, "N");
      const returnValue = rover.processInstruction("L", boundary22);

      expect(returnValue).toBe(true);
    });

    it("R", () => {
      let rover = new Rover(location00, "N");
      const returnValue = rover.processInstruction("R", boundary22);

      expect(returnValue).toBe(true);
    });

    it("M, within boundary", () => {
      let rover = new Rover(location00, "N");
      const returnValue = rover.processInstruction("M", boundary22);

      expect(returnValue).toBe(true);
    });

    it("M, beyond boundary", () => {
      let rover = new Rover(location11, "N");
      const returnValue = rover.processInstruction("M", boundary11);

      expect(returnValue).toBe(false);
    });
  });
});
