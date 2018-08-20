const { isValidCoordinateInput, isValidInitialPositionInput } = require("../utils");

const Plateau = require("../Plateau/Plateau");
const Rover = require("../Rover/Rover");

class Controller {
  constructor() {
    this.plateau = {};
    this.rovers = [];
  }

  savePlateauInformation(plateauSizing) {
    if (!isValidCoordinateInput(plateauSizing)) {
      throw Error("Invalid Plateau Size!");
    }

    const sizeArray = plateauSizing.split(" ");
    const x = Number.parseInt(sizeArray[0]);
    const y = Number.parseInt(sizeArray[1]);

    this.plateau = new Plateau(x, y);
  }

  addNewRoverWithInitialPosition(position) {
    if (!isValidInitialPositionInput(position)) {
      throw Error("Invalid Initial Position!");
    }

    const positionArray = position.split(" ");
    const x = Number.parseInt(positionArray[0]);
    const y = Number.parseInt(positionArray[1]);
    const orientation = positionArray[2];
    this.rovers.push(new Rover(x, y, orientation));
  }
}

module.exports = Controller;
