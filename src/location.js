const { NORTH, SOUTH, EAST, WEST } = require("./orientation");

const handleMovement = (orientation, currentLocation) => {
  const { x, y } = currentLocation;
  const newLocation = { x, y };

  if (orientation === NORTH) newLocation.y += 1;
  else if (orientation === EAST) newLocation.x += 1;
  else if (orientation === SOUTH) newLocation.y -= 1;
  else if (orientation === WEST) newLocation.x -= 1;
  else throw new Error(`Unidentified orientation: ${orientation}`);

  return newLocation;
};

class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  forward(orientation, plateau) {
    const targetLocation = handleMovement(orientation, this);

    if (plateau.isLocationOutOfBound(targetLocation)) return false;

    this.x = targetLocation.x;
    this.y = targetLocation.y;
    return true;
  }
}

module.exports = Location;
