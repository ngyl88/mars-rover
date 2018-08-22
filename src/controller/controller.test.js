const Controller = require("./controller");

it("Controller constructor", () => {
  const controller = new Controller();
  expect(controller.plateau).toEqual({});
  expect(controller.rovers.length).toBe(0);
});

it("savePlateauInformation", () => {
  const controller = new Controller();
  controller.savePlateauInformation("5 5");

  expect(controller.plateau).not.toEqual({});
});

it("addNewRoverWithInitialPosition", () => {
  const controller = new Controller();
  controller.addNewRoverWithInitialPosition("5 5 S");

  expect(controller.rovers.length).toEqual(1);
});

describe("sendInstructionsToLastAddedRover", () => {
  let controller = null;

  beforeEach(() => {
    controller = new Controller();
    controller.savePlateauInformation("5 5");
    expect(controller.plateau.boundary).toBeDefined();
  });

  it("invalid state - no rovers added", () => {
    expect(controller.rovers.length).toEqual(0);

    const testFunc = () => controller.sendInstructionsToLastAddedRover("LML");
    expect(testFunc).toThrowError("No rover");
  });

  describe("controller having one rover", () => {
    let spyOnProcessInstruction = null;

    beforeEach(() => {
      controller.addNewRoverWithInitialPosition("1 2 N");
      expect(controller.rovers.length).toEqual(1);

      spyOnProcessInstruction = jest.spyOn(
        controller.rovers[0],
        "processInstruction"
      );
      spyOnProcessInstruction.mockImplementation();
    });

    afterEach(() => {
      spyOnProcessInstruction.mockRestore();
    });

    it("if valid instructions, should break down the instructions and send one-by-one to rover", () => {
      controller.sendInstructionsToLastAddedRover("LML");
      expect(spyOnProcessInstruction).toHaveBeenCalledTimes(3);
    });

    it("if valid instruction and rover is not rip, should send instruction and plateau boundary to rover", () => {
      const instruction = "M";
      controller.sendInstructionsToLastAddedRover(instruction);

      expect(spyOnProcessInstruction).toHaveBeenCalledWith(
        instruction,
        controller.plateau
      );
    });
  });
});

it("printRoverPositions", () => {
  const controller = new Controller();
  controller.addNewRoverWithInitialPosition("1 2 N");
  controller.addNewRoverWithInitialPosition("3 4 E");

  const output = controller.printRoverPositions();
  expect(output).toMatch(`\trover[0]: 1 2 N\n\trover[1]: 3 4 E\n`);
});
