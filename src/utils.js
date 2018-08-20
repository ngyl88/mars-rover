const orientationObject = require("./orientation");

const readInstructionsToArray = string => {
  return string.split("");
};

const isValidCoordinateInput = inputString => {
  const inputArray = inputString.split(" ");
  if (inputArray.length != 2) {
    return false;
  }

  const x = Number.parseInt(inputArray[0]);
  const y = Number.parseInt(inputArray[1]);

  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
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
  return isValidCoordinateInput(coordinates);
};

module.exports = {
  readInstructionsToArray,
  isValidCoordinateInput,
  isValidInitialPositionInput
};
