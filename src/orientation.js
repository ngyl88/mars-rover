const orientation = {
  NORTH: "N",
  SOUTH: "S",
  EAST: "E",
  WEST: "W"
}

const isValidOrientation = input => {
  return Object.values(orientation).indexOf(input) !== -1;
};

module.exports = {
  ...orientation,
  isValidOrientation
};
