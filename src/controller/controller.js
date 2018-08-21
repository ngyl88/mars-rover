const {
  getCoordinateFromString,
  getCoordinateAndOrientationFromString,
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
    const maxCoordinate = getCoordinateFromString(plateauSizing);
    this.plateau = new Plateau(maxCoordinate.x, maxCoordinate.y);
  }

  addNewRoverWithInitialPosition(position) {
    const translated = getCoordinateAndOrientationFromString(position);

    const coordinate = translated.coordinate;
    const orientation = translated.orientation;

    this.rovers.push(new Rover(coordinate.x, coordinate.y, orientation));
  }

  sendInstructionsToLastAddedRover(instructions) {
    if(this.rovers.length === 0) {
      throw new Error('No rover. Please add rover!');
    }

    const targetRover = this.rovers[this.rovers.length - 1];

    const instructionArray = readInstructionsToArray(instructions);
    instructionArray.forEach(instruction => {
      targetRover.processInstruction(instruction);
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
