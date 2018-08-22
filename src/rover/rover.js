const { LEFT, RIGHT, MOVE } = require("../command");
const { rotate } = require("../orientation");

class Rover {
  constructor(location, orientation) {
    this.location = location;
    this.orientation = orientation;
    this.rip = false;
  }

  printCurrentPosition() {
    const ripString = this.rip ? " RIP" : '';
    return `${this.location.x} ${this.location.y} ${this.orientation}` + ripString;
  }

  processInstruction(instruction, boundaryLocation) {
    if (instruction === LEFT || instruction === RIGHT) {
      this.orientation = rotate(instruction, this.orientation);
    } else if (instruction === MOVE) {
      const safe = this.location.forward(this.orientation, boundaryLocation);
      this.rip = !safe;
    } else {
      throw new Error("Invalid instruction");
    }
  }
}

module.exports = Rover;
