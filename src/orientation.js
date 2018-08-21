const NORTH = "N";
const SOUTH = "S";
const EAST = "E";
const WEST = "W";

const COMPASS = [NORTH, EAST, SOUTH, WEST];

const isValidOrientation = input => {
  return COMPASS.indexOf(input) !== -1;
};

const rotateLeft = currentOrientation => {
  if (currentOrientation === NORTH) return WEST;
  return COMPASS[COMPASS.indexOf(currentOrientation) - 1];
};

const rotateRight = currentOrientation => {
  if (currentOrientation === WEST) return NORTH;
  return COMPASS[COMPASS.indexOf(currentOrientation) + 1];
};

module.exports = {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  isValidOrientation,
  rotateLeft,
  rotateRight
};
