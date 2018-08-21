const { LEFT, RIGHT, MOVE } = require("../command");
const { rotateLeft, rotateRight } = require("../orientation");
const { NORTH, SOUTH, EAST, WEST } = require("../orientation");

const move = (currentOrientation, x, y) => {
  const newPosition = { x, y };
  switch (currentOrientation) {
    case NORTH:
      newPosition.y += 1;
      break;
    case SOUTH:
      newPosition.y -= 1;
      break;
    case EAST:
      newPosition.x += 1;
      break;
    case WEST:
      newPosition.x -= 1;
      break;
  }
  return newPosition;
};

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
    if (instruction === LEFT) {
      this.orientation = rotateLeft(this.orientation);
    } else if (instruction === RIGHT) {
      this.orientation = rotateRight(this.orientation);
    } else if (instruction === MOVE) {
      const newPosition = move(this.orientation, this.x, this.y);
      this.x = newPosition.x;
      this.y = newPosition.y;
    } else {
      throw new Error("Invalid instruction");
    }
  }
}

module.exports = Rover;
