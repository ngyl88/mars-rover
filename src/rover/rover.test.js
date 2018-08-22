const Rover = require("./rover");

const Location = require("../location");
const Plateau = require("../plateau/plateau");

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
  let plateau22, plateau11;

  beforeEach(() => {
    plateau22 = new Plateau(boundary22);
    plateau11 = new Plateau(boundary11);
  });

  describe("state change after L:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(location00, "N");
      rover.processInstruction("L", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: S", () => {
      let rover = new Rover(location00, "S");
      rover.processInstruction("L", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: E", () => {
      let rover = new Rover(location00, "E");
      rover.processInstruction("L", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });

    it("current orientation: W", () => {
      let rover = new Rover(location00, "W");
      rover.processInstruction("L", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });
  });

  describe("state change after R:", () => {
    it("current orientation: N", () => {
      let rover = new Rover(location00, "N");
      rover.processInstruction("R", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 E");
    });

    it("current orientation: S", () => {
      let rover = new Rover(location00, "S");
      rover.processInstruction("R", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 W");
    });

    it("current orientation: E", () => {
      let rover = new Rover(location00, "E");
      rover.processInstruction("R", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 S");
    });

    it("current orientation: W", () => {
      let rover = new Rover(location00, "W");
      rover.processInstruction("R", plateau22);

      expect(rover.printCurrentPosition()).toBe("0 0 N");
    });
  });

  describe("state change after M:", () => {
    describe("within boundary", () => {
      it("current orientation: N", () => {
        let rover = new Rover(location00, "N");
        rover.processInstruction("M", plateau22);

        expect(rover.printCurrentPosition()).toBe("0 1 N");
        expect(rover.rip).toBe(false);
      });

      it("current orientation: S", () => {
        let rover = new Rover(location01, "S");
        rover.processInstruction("M", plateau22);

        expect(rover.printCurrentPosition()).toBe("0 0 S");
        expect(rover.rip).toBe(false);
      });

      it("current orientation: E", () => {
        const rover = new Rover(location00, "E");
        rover.processInstruction("M", plateau22);

        expect(rover.printCurrentPosition()).toBe("1 0 E");
        expect(rover.rip).toBe(false);
      });

      it("current orientation: W", () => {
        let rover = new Rover(location10, "W");
        rover.processInstruction("M", plateau22);

        expect(rover.printCurrentPosition()).toBe("0 0 W");
        expect(rover.rip).toBe(false);
      });
    });

    describe("beyond boundary", () => {
      it("current orientation: N", () => {
        let rover = new Rover(location11, "N");
        rover.processInstruction("M", plateau11);

        expect(rover.printCurrentPosition()).toBe("1 1 N RIP");
        expect(rover.rip).toBe(true);
      });

      it("current orientation: E", () => {
        const rover = new Rover(location11, "E");
        rover.processInstruction("M", plateau11);

        expect(rover.printCurrentPosition()).toBe("1 1 E RIP");
        expect(rover.rip).toBe(true);
      });

      it("current orientation: S", () => {
        let rover = new Rover(location00, "S");
        rover.processInstruction("M", plateau11);

        expect(rover.printCurrentPosition()).toBe("0 0 S RIP");
        expect(rover.rip).toBe(true);
      });

      it("current orientation: W", () => {
        let rover = new Rover(location00, "W");
        rover.processInstruction("M", plateau11);

        expect(rover.printCurrentPosition()).toBe("0 0 W RIP");
        expect(rover.rip).toBe(true);
      });
    });
  });

  describe("addBeacon with M", () => {
    it("within boundary, should call location.forward return false", () => {
      const plateau = plateau11;
      const rover = new Rover(location11, "N");

      const spyOnPlateauAddBeacon = jest.spyOn(plateau, "addBeacon");
      spyOnPlateauAddBeacon.mockImplementation();

      const spyOnLocationForward = jest.spyOn(rover.location, "forward");
      spyOnLocationForward.mockImplementation(() => false);

      rover.processInstruction("M", plateau);

      expect(spyOnPlateauAddBeacon).toBeCalledWith("1 1 N");
      spyOnPlateauAddBeacon.mockRestore();
    });
    
    it("within boundary, should not call location.forward return true", () => {
      const plateau = plateau22;
      const rover = new Rover(location00, "N");

      const spyOnPlateauAddBeacon = jest.spyOn(plateau, "addBeacon");
      spyOnPlateauAddBeacon.mockImplementation();

      const spyOnLocationForward = jest.spyOn(rover.location, "forward");
      spyOnLocationForward.mockImplementation(() => true);

      rover.processInstruction("M", plateau);

      expect(spyOnPlateauAddBeacon).not.toHaveBeenCalled()
      spyOnPlateauAddBeacon.mockRestore();
    });
  });

  it('should ignore M instruction if beacon exist', () => {
    const plateau = plateau11;
    plateau.addBeacon("1 1 N");

    const rover = new Rover(location11, "N");
    const spyOnLocationForward = jest.spyOn(rover.location, "forward");
    spyOnLocationForward.mockImplementation();

    rover.processInstruction("M", plateau);

    expect(spyOnLocationForward).not.toHaveBeenCalled();
  });
});
