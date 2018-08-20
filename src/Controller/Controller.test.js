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

it("addNewRoverWithInitialPosition", () => {
  const controller = new Controller();
  controller.addNewRoverWithInitialPosition("5 5 S");

  expect(controller.rovers.length).toEqual(1);
});
