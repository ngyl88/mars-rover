const readInstructionsToArray = string => {
  return string.split("");
};

const isValidCoordinateInput = inputString => {
  const inputArray = inputString.split(" ");
  if (inputArray.length != 2) {
    return false;
  }

  inputArray.forEach(input => {
    const parsed = Number.parseInt(input);
    if (Number.isNaN(parsed)) return false;
  });
  return true;
};

module.exports = {
  readInstructionsToArray,
  isValidCoordinateInput
};
