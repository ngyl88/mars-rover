const { getCoordinateFromString, isValidInitialPositionInput } = require("../utils");

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
    if (!isValidInitialPositionInput(position)) {
      throw new Error("Invalid Initial Position!");
    }

    const positionArray = position.split(" ");
    const x = Number.parseInt(positionArray[0]);
    const y = Number.parseInt(positionArray[1]);
    const orientation = positionArray[2];
    this.rovers.push(new Rover(x, y, orientation));
  }
}

module.exports = Controller;
