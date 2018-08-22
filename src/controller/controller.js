const {
  getLocationFromString,
  getLocationAndOrientationFromString,
  readInstructionsToArray
} = require("../utils");

const Plateau = require("../plateau/plateau");
const Rover = require("../rover/rover");

class Controller {
  constructor() {
    this.plateau = {};
    this.rovers = [];
  }

  savePlateauInformation(plateauSizing) {
    const boundaryLocation = getLocationFromString(plateauSizing);
    this.plateau = new Plateau(boundaryLocation);
  }

  addNewRoverWithInitialPosition(position) {
    const parsed = getLocationAndOrientationFromString(position);
    this.rovers.push(new Rover(parsed.location, parsed.orientation));
  }

  sendInstructionsToLastAddedRover(instructions) {
    if (this.rovers.length === 0) {
      throw new Error("No rover. Please add rover!");
    }

    const targetRover = this.rovers[this.rovers.length - 1];

    const instructionArray = readInstructionsToArray(instructions);
    instructionArray.forEach(instruction => {
      targetRover.processInstruction(instruction, this.plateau);
    });
  }

  printRoverPositions() {
    let output = "";
    this.rovers.forEach((rover, index) => {
      const roverDescription = `\trover[${index}]: ${rover.printCurrentPosition()}\n`;
      output += roverDescription;
    });
    return output;
  }
}

module.exports = Controller;
