const {
  getCoordinateFromString,
  getCoordinateAndOrientationFromString
} = require("../utils");

const Plateau = require("../Plateau/Plateau");
const Rover = require("../Rover/Rover");

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
    this.rovers[this.rovers.length - 1].receiveInstructions(instructions);
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
