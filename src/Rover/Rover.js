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
    if (instruction === "L") {
      this.rotateLeft();
    }
  }

  rotateLeft() {
    switch (this.orientation) {
      case "N":
        this.orientation = "W";
        break;
      case "S":
        this.orientation = "E";
        break;
      case "E":
        this.orientation = "N";
        break;
      case "W":
        this.orientation = "S";
        break;
    }
  }
}

module.exports = Rover;
