const { NORTH, SOUTH, EAST, WEST } = require("./orientation");

const handleMovementX = (orientation, x, maxX) => {
  if (orientation === EAST) return x + 1 > maxX ? 0 : 1;
  if (orientation === WEST) return x - 1 < 0 ? 0 : -1;
  throw new Error("Invalid X Movement");
};

const handleMovementY = (orientation, y, maxY) => {
  if (orientation === NORTH) return y + 1 > maxY ? 0 : 1;
  if (orientation === SOUTH) return y - 1 < 0 ? 0 : -1;
  throw new Error("Invalid Y Movement");
};

class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  forward(orientation, boundaryLocation) {
    if (orientation === NORTH || orientation === SOUTH) {
      const movement = handleMovementY(orientation, this.y, boundaryLocation.y);

      if (movement === 0) return false;
      this.y += movement;
    }
    if (orientation === EAST || orientation === WEST) {
      const movement = handleMovementX(orientation, this.x, boundaryLocation.x);

      if (movement === 0) return false;
      this.x += movement;
    }
    return true;
  }
}

module.exports = Location;
