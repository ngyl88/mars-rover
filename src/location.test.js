const Location = require("./location");

it("location constructor", () => {
  const location = new Location(3, 5);
  expect(location.x).toBe(3);
  expect(location.y).toBe(5);
});

describe("forward, within boundary", () => {
  const boundary = new Location(2, 2);

  it("current orientation: N", () => {
    const location = new Location(0, 0);
    const withinBoundary = location.forward("N", boundary);

    expect(withinBoundary).toBe(true);
    expect(location.x).toBe(0);
    expect(location.y).toBe(1);
  });

  it("current orientation: S", () => {
    const location = new Location(0, 1);
    const withinBoundary = location.forward("S", boundary);

    expect(withinBoundary).toBe(true);
    expect(location.x).toBe(0);
    expect(location.y).toBe(0);
  });

  it("current orientation: E", () => {
    const location = new Location(0, 0);
    const withinBoundary = location.forward("E", boundary);

    expect(withinBoundary).toBe(true);
    expect(location.x).toBe(1);
    expect(location.y).toBe(0);
  });

  it("current orientation: W", () => {
    const location = new Location(1, 0);
    const withinBoundary = location.forward("W", boundary);

    expect(withinBoundary).toBe(true);
    expect(location.x).toBe(0);
    expect(location.y).toBe(0);
  });
});

describe("forward, beyond boundary", () => {
  const boundary = new Location(1, 1);
  const location00 = new Location(0, 0);
  const location11 = new Location(1, 1);

  it("current orientation: N", () => {
    const location = location11;
    const withinBoundary = location.forward("N", boundary);

    expect(withinBoundary).toBe(false);
    expect(location.x).toBe(1);
    expect(location.y).toBe(1);
  });

  it("current orientation: E", () => {
    const location = location11;
    const withinBoundary = location.forward("E", boundary);

    expect(withinBoundary).toBe(false);
    expect(location.x).toBe(1);
    expect(location.y).toBe(1);
  });

  it("current orientation: S", () => {
    const location = location00;
    const withinBoundary = location.forward("S", boundary);

    expect(withinBoundary).toBe(false);
    expect(location.x).toBe(0);
    expect(location.y).toBe(0);
  });

  it("current orientation: W", () => {
    const location = location00;
    const withinBoundary = location.forward("W", boundary);

    expect(withinBoundary).toBe(false);
    expect(location.x).toBe(0);
    expect(location.y).toBe(0);
  });
});
