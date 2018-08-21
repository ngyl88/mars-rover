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
    switch (instruction) {
      case "L":
        this.orientation = rotateLeft(this.orientation);
        break;
      case "R":
        this.orientation = rotateRight(this.orientation);
        break;
      case "M":
        const newPosition = move(this.orientation, this.x, this.y);
        
        this.x = newPosition.x;
        this.y = newPosition.y;
        break;
      default:
        throw new Error("Invalid instruction");
    }
  }
}

module.exports = Rover;
