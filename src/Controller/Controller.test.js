const Controller = require("./Controller");

it("Controller constructor", () => {
  const controller = new Controller();
  expect(controller.plateau).toEqual({});
  expect(controller.rovers.length).toBe(0);
});

it("validateAndSavePlateauInformation", () => {
  const controller = new Controller();
  controller.validateAndSavePlateauInformation("5 5");

  const plateauCreated = controller.plateau;
  expect(plateauCreated.x).toEqual(5);
  expect(plateauCreated.y).toEqual(5);
});
