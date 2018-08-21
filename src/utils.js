const { isValidOrientation } = require("./orientation");
const Location = require("./location");

const readInstructionsToArray = string => {
  const acceptableRegex = RegExp('^[LMR]*$');

  if (!acceptableRegex.test(string)) {
    throw new Error("Invalid Instructions!");
  }
  return string.split("");
};

const parseLocation = locationString => {
  const inputArray = locationString.split(" ");
  return new Location(
    Number.parseInt(inputArray[0]),
    Number.parseInt(inputArray[1])
  );
};

const getLocationFromString = locationString => {
  const error = new Error("Invalid Coordinate!");

  if (locationString.split(" ").length != 2) {
    throw error;
  }

  const location = parseLocation(locationString);
  if (isNaN(location.x) || isNaN(location.y)) {
    throw error;
  }
  return location;
};

const getLocationAndOrientationFromString = positionString => {
  const error = new Error("Invalid Position!");

  const inputArray = positionString.split(" ");
  if (inputArray.length != 3 || !isValidOrientation(inputArray[2])) {
    throw error;
  }

  const coordinateString = positionString.slice(0, positionString.lastIndexOf(" "));
  
  return {
    location: getLocationFromString(coordinateString),
    orientation: inputArray[2]
  };
};

module.exports = {
  readInstructionsToArray,
  getLocationFromString,
  getLocationAndOrientationFromString
};
