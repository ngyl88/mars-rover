const { NORTH, SOUTH, EAST, WEST } = require("./orientation");

const getPositiveMovement = (newXY, maxXY) => {
  return newXY > maxXY ? 0 : 1;
};

const getNegativeMovement = (newXY) => {
  return newXY < 0 ? 0 : -1;
};

const handleMovement = (orientation, currentLocation, boundaryLocation) => {
  const maxX = boundaryLocation.x;
  const maxY = boundaryLocation.y;

  const movement = { x: 0, y: 0 };

  if (orientation === NORTH) {
    movement.y = getPositiveMovement(currentLocation.y + 1, maxY);
  } else if (orientation === EAST) {
    movement.x = getPositiveMovement(currentLocation.x + 1, maxX);
  } else if (orientation === SOUTH) {
    movement.y = getNegativeMovement(currentLocation.y - 1);
  } else if (orientation === WEST) {
    movement.x = getNegativeMovement(currentLocation.x - 1);
  } else {
    throw new Error(`Unidentified orientation: ${orientation}`);
  }

  return movement;
};

class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  forward(orientation, boundaryLocation) {
    const movement = handleMovement(orientation, this, boundaryLocation);

    if (movement.x === 0 && movement.y === 0) return false;

    this.x += movement.x;
    this.y += movement.y;
    return true;
  }
}

module.exports = Location;
