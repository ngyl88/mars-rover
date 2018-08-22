class Plateau {
  constructor(boundaryLocation) {
    this.boundary = boundaryLocation;
    this.beacons = [];
  }

  addBeacon(position) {
    if (!this.isBeaconExist(position)) {
      this.beacons.push(position);
    }
  }

  isBeaconExist(position) {
    return this.beacons.indexOf(position) !== -1;
  }
}

module.exports = Plateau;
