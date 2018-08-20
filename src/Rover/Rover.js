const { NORTH, SOUTH, EAST, WEST } = require("../orientation");
const { readInstructionsToArray } = require("../utils");

class Rover {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  printCurrentPosition() {
    return `${this.x} ${this.y} ${this.orientation}`;
  }

  receiveInstructions(instructions) {
    const instructionArray = readInstructionsToArray(instructions);
    instructionArray.forEach(instruction => {
      this.processInstruction(instruction);
    });
  }

  processInstruction(instruction) {
    switch (instruction) {
      case "L":
        this.rotateLeft();
        break;
      case "R":
        this.rotateRight();
        break;
      case "M":
        this.move();
        break;
      default:
        throw new Error("Invalid instruction");
    }
  }

  rotateLeft() {
    switch (this.orientation) {
      case NORTH:
        this.orientation = WEST;
        break;
      case SOUTH:
        this.orientation = EAST;
        break;
      case EAST:
        this.orientation = NORTH;
        break;
      case WEST:
        this.orientation = SOUTH;
        break;
    }
  }

  rotateRight() {
    switch (this.orientation) {
      case NORTH:
        this.orientation = EAST;
        break;
      case SOUTH:
        this.orientation = WEST;
        break;
      case EAST:
        this.orientation = SOUTH;
        break;
      case WEST:
        this.orientation = NORTH;
        break;
    }
  }

  move() {
    switch (this.orientation) {
      case NORTH:
        this.y += 1;
        break;
      case SOUTH:
        this.y -= 1;
        break;
      case EAST:
        this.x += 1;
        break;
      case WEST:
        this.x -= 1;
        break;
    }
  }
}

module.exports = Rover;
