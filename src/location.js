const { NORTH, SOUTH, EAST, WEST } = require("./orientation");

class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  forward(currentOrientation) {
    if (currentOrientation === NORTH) this.y += 1;
    if (currentOrientation === SOUTH) this.y -= 1;
    if (currentOrientation === EAST) this.x += 1;
    if (currentOrientation === WEST) this.x -= 1;
    
    return this;
  }
}

module.exports = Location;
