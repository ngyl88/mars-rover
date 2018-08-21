const { LEFT, RIGHT, MOVE } = require("../command");
const { rotateLeft, rotateRight } = require("../orientation");
const { NORTH, SOUTH, EAST, WEST } = require("../orientation");

const move = (currentOrientation, location) => {
  const { x, y } = location;
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
  constructor(location, orientation) {
    this.location = location;
    this.orientation = orientation;
  }

  printCurrentPosition() {
    return `${this.location.x} ${this.location.y} ${this.orientation}`;
  }

  processInstruction(instruction) {
    if (instruction === LEFT) {
      this.orientation = rotateLeft(this.orientation);
    } else if (instruction === RIGHT) {
      this.orientation = rotateRight(this.orientation);
    } else if (instruction === MOVE) {
      const newPosition = move(this.orientation, this.location);
      this.location.x = newPosition.x;
      this.location.y = newPosition.y;
    } else {
      throw new Error("Invalid instruction");
    }
  }
}

module.exports = Rover;
