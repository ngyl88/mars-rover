const Location = require("../location");
const Plateau = require("./plateau");

it("Plateau constructor", () => {
  const boundaryLocation = new Location(5, 6);
  const plateau = new Plateau(boundaryLocation);

  expect(plateau.boundary.x).toBe(5);
  expect(plateau.boundary.y).toBe(6);
});

describe("addBeacon()", () => {
  let plateau = null;

  beforeEach(() => {
    const boundaryLocation = new Location(5, 6);
    plateau = new Plateau(boundaryLocation);
    expect(plateau.beacons.length).toBe(0);
  });
  
  it('add if not exists', () => {
    const position = "5 6 N";
    plateau.addBeacon(position);

    expect(plateau.beacons.length).toBe(1);
    expect(plateau.beacons).toContain(position);
  });

  it('should not add if existing', () => {
    const position = "5 6 N";
    plateau.addBeacon(position);
    plateau.addBeacon(position);

    expect(plateau.beacons.length).toBe(1);
    expect(plateau.beacons).toContain(position);
  });
});