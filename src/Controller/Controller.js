const { isValidPlateauInput } = require("../utils");

const Plateau = require("../Plateau/Plateau");

class Controller {
  constructor() {
    this.plateau = {};
    this.rovers = [];
  }

  validateAndSavePlateauInformation(plateauSizing) {
    if (!isValidPlateauInput(plateauSizing)) {
      throw Error("Invalid Plateau Size!");
    }
    const sizeArray = plateauSizing.split(" ");
    const x = Number.parseInt(sizeArray[0]);
    const y = Number.parseInt(sizeArray[1]);

    this.plateau = new Plateau(x, y);
  }
}

module.exports = Controller;
