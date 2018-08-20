const Controller = require("./Controller");

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

describe("addNewRoverWithInitialPosition", () => {
  it("valid input", () => {
    const controller = new Controller();
    controller.addNewRoverWithInitialPosition("5 5 S");

    expect(controller.rovers.length).toEqual(1);
  });

  it("invalid input", () => {
    const controller = new Controller();
    const addRoverWithInvalidInitialPosition = () =>
      controller.addNewRoverWithInitialPosition("5 5 SW");

    expect(addRoverWithInvalidInitialPosition).toThrowError("Invalid");
  });
});
