const orientation = require("../orientation");

class Rover {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  printCurrentPosition() {
    return `${this.x} ${this.y} ${this.orientation}`;
  }

  processInstruction(instruction) {
    switch (instruction) {
      case "L":
        this.rotateLeft();
        break;
      case "R":
        this.rotateRight();
        break;
      default:
        throw new Error("Invalid instruction");
    }
  }

  rotateLeft() {
    switch (this.orientation) {
      case orientation.NORTH:
        this.orientation = orientation.WEST;
        break;
      case orientation.SOUTH:
        this.orientation = orientation.EAST;
        break;
      case orientation.EAST:
        this.orientation = orientation.NORTH;
        break;
      case orientation.WEST:
        this.orientation = orientation.SOUTH;
        break;
    }
  }

  rotateRight() {
    switch (this.orientation) {
      case orientation.NORTH:
        this.orientation = orientation.EAST;
        break;
      case orientation.SOUTH:
        this.orientation = orientation.WEST;
        break;
      case orientation.EAST:
        this.orientation = orientation.SOUTH;
        break;
      case orientation.WEST:
        this.orientation = orientation.NORTH;
        break;
    }
  }
}

module.exports = Rover;
