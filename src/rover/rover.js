const { LEFT, RIGHT, MOVE } = require("../command");
const { rotate } = require("../orientation");

class Rover {
  constructor(location, orientation) {
    this.location = location;
    this.orientation = orientation;
    this.rip = false;
  }

  get lastPosition() {
    return `${this.location.x} ${this.location.y} ${this.orientation}`;
  }

  printCurrentPosition() {
    const ripString = this.rip ? " RIP" : '';
    return `${this.lastPosition}` + ripString;
  }

  processInstruction(instruction, plateau) {
    if (this.rip) return;
    
    if (instruction === LEFT || instruction === RIGHT) {
      this.orientation = rotate(instruction, this.orientation);
    } else if (instruction === MOVE) {
      if (plateau.isBeaconExist(this.lastPosition)) return;

      const safe = this.location.forward(this.orientation, plateau);
      if (!safe) {
        plateau.addBeacon(this.lastPosition);
        this.rip = true;
      }
    } else {
      throw new Error("Invalid instruction");
    }
  }
}

module.exports = Rover;
