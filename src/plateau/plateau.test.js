const Location = require("../location");
const Plateau = require("./plateau");

it("Plateau constructor", () => {
  const boundaryLocation = new Location(5, 6);
  const plateau = new Plateau(boundaryLocation);

  expect(plateau.boundary.x).toBe(5);
  expect(plateau.boundary.y).toBe(6);
});