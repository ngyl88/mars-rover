const Plateau = require("./plateau");

it("Plateau constructor", () => {
  const plateau = new Plateau(5, 5);
  expect(plateau.x).toBe(5);
  expect(plateau.y).toBe(5);
});