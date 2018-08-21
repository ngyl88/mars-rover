const Location = require("./location");

it("location constructor", () => {
  const location = new Location(3, 5);
  expect(location.x).toBe(3);
  expect(location.y).toBe(5);
});

describe("forward", () => {
  it("current orientation: N", () => {
    const location = new Location(0, 0);
    const newLocation = location.forward("N");

    expect(newLocation.x).toBe(0);
    expect(newLocation.y).toBe(1);
  });

  it("current orientation: S", () => {
    const location = new Location(0, 1);
    const newLocation = location.forward("S");

    expect(newLocation.x).toBe(0);
    expect(newLocation.y).toBe(0);
  });

  it("current orientation: E", () => {
    const location = new Location(0, 0);
    const newLocation = location.forward("E");

    expect(newLocation.x).toBe(1);
    expect(newLocation.y).toBe(0);
  });

  it("current orientation: W", () => {
    const location = new Location(1, 0);
    const newLocation = location.forward("W");

    expect(newLocation.x).toBe(0);
    expect(newLocation.y).toBe(0);
  });
});
