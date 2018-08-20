const Rover = require('./Rover');

it("Rover constructor", () => {
    const rover = new Rover(0, 0, 'N');
    expect(rover.x).toBe(0);
    expect(rover.y).toBe(0);
    expect(rover.orientation).toBe('N');
});

describe.skip("L/R instructions", () => {
});