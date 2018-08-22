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
  it("if valid instructions, should break down the instructions and send one-by-one to rover", () => {
    const controller = new Controller();
    controller.addNewRoverWithInitialPosition("1 2 N");
    expect(controller.rovers.length).toEqual(1);

    const spyOnProcessInstruction = jest.spyOn(controller.rovers[0], "processInstruction");
    spyOnProcessInstruction.mockImplementation();

    controller.sendInstructionsToLastAddedRover("LML");
    expect(spyOnProcessInstruction).toHaveBeenCalledTimes(3);

    spyOnProcessInstruction.mockRestore();
  });

  it("if valid instruction and rover is not rip, should send instruction and plateau boundary to rover", () => {
    const controller = new Controller();
    controller.savePlateauInformation("5 5");
    expect(controller.plateau.boundary).toBeDefined();

    controller.addNewRoverWithInitialPosition("1 2 N");
    expect(controller.rovers.length).toEqual(1);

    const instruction = "M";
    const spyOnProcessInstruction = jest.spyOn(controller.rovers[0], "processInstruction");
    spyOnProcessInstruction.mockImplementation();
    
    controller.sendInstructionsToLastAddedRover(instruction);
    expect(spyOnProcessInstruction).toHaveBeenCalledWith(instruction, controller.plateau.boundary);

    spyOnProcessInstruction.mockRestore();
  });

  it("if valid instructions but rover is rip, should not send instruction to rover", () => {
    const controller = new Controller();
    controller.addNewRoverWithInitialPosition("1 2 N");
    expect(controller.rovers.length).toEqual(1);

    const spyOnProcessInstruction = jest.spyOn(controller.rovers[0], "processInstruction");
    spyOnProcessInstruction.mockImplementation();
    
    controller.rovers[0].rip = true;
    controller.sendInstructionsToLastAddedRover("LML");
    expect(spyOnProcessInstruction).toHaveBeenCalledTimes(0);

    spyOnProcessInstruction.mockRestore();
  });

  it('invalid state - no rovers added', () => {
    const controller = new Controller();
    expect(controller.rovers.length).toEqual(0);

    const testFunc = () => controller.sendInstructionsToLastAddedRover("LML");
    expect(testFunc).toThrowError('No rover');
  });
});

it("printRoverPositions", () => {
  const controller = new Controller();
  controller.addNewRoverWithInitialPosition("1 2 N");
  controller.addNewRoverWithInitialPosition("3 4 E");

  const output = controller.printRoverPositions();
  expect(output).toMatch(`\trover[0]: 1 2 N\n\trover[1]: 3 4 E\n`);
});
