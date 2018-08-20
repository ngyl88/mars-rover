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
    if (this.orientation === "N" && instruction === "L") {
      this.orientation = "W";
    }
  }
}

module.exports = Rover;
