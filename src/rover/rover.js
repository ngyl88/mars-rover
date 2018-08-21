const { LEFT, RIGHT, MOVE } = require("../command");
const { rotate } = require("../orientation");

class Rover {
  constructor(location, orientation) {
    this.location = location;
    this.orientation = orientation;
  }

  printCurrentPosition() {
    return `${this.location.x} ${this.location.y} ${this.orientation}`;
  }

  processInstruction(instruction) {
    if (instruction === LEFT || instruction === RIGHT) {
      this.orientation = rotate(instruction, this.orientation);
    } else if (instruction === MOVE) {
      this.location = this.location.forward(this.orientation);
    } else {
      throw new Error("Invalid instruction");
    }
  }
}

module.exports = Rover;
