class Plateau {
  constructor(boundaryLocation) {
    this.boundary = boundaryLocation;
    this.beacons = [];
  }

  addBeacon(position) {
    if (this.beacons.indexOf(position) === -1) {
      this.beacons.push(position);
    }
  }
}

module.exports = Plateau;
