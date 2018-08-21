const { LEFT, RIGHT } = require("./command");

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

const rotate = (command, currentOrientation) => {
  if(command === LEFT) return rotateLeft(currentOrientation);
  if(command === RIGHT) return rotateRight(currentOrientation);
  throw new Error("Invalid rotate instruction!");
};

module.exports = {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  isValidOrientation,
  rotate
};
