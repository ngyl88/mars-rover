const orientationObject = require("./orientation");

const readInstructionsToArray = string => {
  return string.split("");
};

const extractCoordinatesFromString = coordinateString => {
  const inputArray = coordinateString.split(" ");

  return {
    x: Number.parseInt(inputArray[0]),
    y: Number.parseInt(inputArray[1])
  }
};

const getCoordinateFromString = inputString => {
  const error = new Error("Invalid Coordinate!");

  const inputArray = inputString.split(" ");
  if (inputArray.length != 2) {
    throw error;
  }

  const coordinate = extractCoordinatesFromString(inputString);
  if (isNaN(coordinate.x) || isNaN(coordinate.y)) {
    throw error;
  }
  return coordinate;
};

const isValidOrientation = orientation => {
  const validOrientation = Object.values(orientationObject);
  return validOrientation.indexOf(orientation) !== -1;
};

const isValidInitialPositionInput = positionString => {
  const inputArray = positionString.split(" ");

  if (inputArray.length != 3 || !isValidOrientation(inputArray[2])) {
    return false;
  }

  const coordinates = positionString.slice(0, positionString.lastIndexOf(" "));
  return getCoordinateFromString(coordinates) != undefined;
};

// const extractCoordinatesAndOrientationFromString = positionString => {
//   const inputArray = positionString.split(" ");
//   return {
//     coordinate: extractCoordinatesFromString(positionString.slice(0, positionString.lastIndexOf(" "))),
//     orientation: inputArray[2]
//   }
// };

module.exports = {
  readInstructionsToArray,
  getCoordinateFromString,
  isValidInitialPositionInput,
  // extractCoordinatesAndOrientationFromString
};
