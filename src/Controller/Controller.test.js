const Controller = require("./Controller");

it("Controller constructor", () => {
  const controller = new Controller();
  expect(controller.plateau).toEqual({});
  expect(controller.rovers.length).toBe(0);
});

describe("savePlateauInformation", () => {
  it("valid input", () => {
    const controller = new Controller();
    controller.savePlateauInformation("5 5");

    expect(controller.plateau).not.toEqual({});
  });

  it("invalid input", () => {
    const controller = new Controller();
    const saveInvalidPlateauSize = () => controller.savePlateauInformation("X 5");

    expect(saveInvalidPlateauSize).toThrowError("Invalid");
  });
});

describe("addNewRoverWithInitialPosition", () => {
  it("valid input", () => {
    const controller = new Controller();
    controller.addNewRoverWithInitialPosition("5 5 S");

    expect(controller.rovers.length).toEqual(1);
  });

  it("invalid input", () => {
    const controller = new Controller();
    const addRoverWithInvalidInitialPosition = () => controller.addNewRoverWithInitialPosition("5 5 SW");

    expect(addRoverWithInvalidInitialPosition).toThrowError("Invalid");
  });
});
