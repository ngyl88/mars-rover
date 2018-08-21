const { isValidOrientation } = require("./orientation");
const Location = require("./location");

const readInstructionsToArray = string => {
  const acceptableRegex = RegExp("^[LMR]*$");

  if (!acceptableRegex.test(string)) {
    throw new Error("Invalid Instructions!");
  }
  return string.split("");
};

const parseLocation = (xString, yString) => {
  const x = Number.parseInt(xString);
  const y = Number.parseInt(yString);

  if (isNaN(x) || isNaN(y)) throw new Error("Invalid Coordinate!");
  
  return new Location(x, y);
};

const getLocationFromString = locationString => {
  const inputArray = locationString.split(" ");

  if (inputArray.length != 2) throw new Error("Invalid Location!");
  
  return parseLocation(inputArray[0], inputArray[1]);
};

const getLocationAndOrientationFromString = positionString => {
  const inputArray = positionString.split(" ");
  if (inputArray.length != 3 || !isValidOrientation(inputArray[2])) {
    throw new Error("Invalid Position!");
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
