const { isValidOrientation } = require("./orientation");

const readInstructionsToArray = string => {
  return string.split("");
};

const extractCoordinatesFromString = coordinateString => {
  const inputArray = coordinateString.split(" ");

  return {
    x: Number.parseInt(inputArray[0]),
    y: Number.parseInt(inputArray[1])
  };
};

const getCoordinateFromString = coordinateString => {
  const error = new Error("Invalid Coordinate!");

  if (coordinateString.split(" ").length != 2) {
    throw error;
  }

  const coordinate = extractCoordinatesFromString(coordinateString);
  if (isNaN(coordinate.x) || isNaN(coordinate.y)) {
    throw error;
  }
  return coordinate;
};

const getCoordinateAndOrientationFromString = positionString => {
  const error = new Error("Invalid Position!");

  const inputArray = positionString.split(" ");
  if (inputArray.length != 3 || !isValidOrientation(inputArray[2])) {
    throw error;
  }

  const coordinateString = positionString.slice(0, positionString.lastIndexOf(" "));
  return {
    coordinate: getCoordinateFromString(coordinateString),
    orientation: inputArray[2]
  };
};

module.exports = {
  readInstructionsToArray,
  getCoordinateFromString,
  getCoordinateAndOrientationFromString
};
