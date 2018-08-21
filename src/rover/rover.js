const { NORTH, SOUTH, EAST, WEST } = require("../orientation");

const compass = [NORTH, EAST, SOUTH, WEST];

const rotateLeft = currentOrientation => {
  if (currentOrientation === NORTH) return WEST;
  return compass[compass.indexOf(currentOrientation) - 1];
};

const rotateRight = currentOrientation => {
  if (currentOrientation === WEST) return NORTH;
  return compass[compass.indexOf(currentOrientation) + 1];
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
    switch (instruction) {
      case "L":
        this.orientation = rotateLeft(this.orientation);
        break;
      case "R":
        this.orientation = rotateRight(this.orientation);
        break;
      case "M":
        this.move();
        break;
      default:
        throw new Error("Invalid instruction");
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
