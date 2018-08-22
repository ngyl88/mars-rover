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

  processInstruction(instruction, boundaryLocation) {
    if (instruction === LEFT || instruction === RIGHT) {
      this.orientation = rotate(instruction, this.orientation);
      return true;
    } else if (instruction === MOVE) {
      const safe = this.location.forward(this.orientation, boundaryLocation);
      this.rip = !safe;
      return safe;
    } else {
      throw new Error("Invalid instruction");
    }
  }
}

module.exports = Rover;
