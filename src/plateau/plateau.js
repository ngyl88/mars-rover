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

  isLocationOutOfBound(location) {
    return (
      location.x > this.boundary.x ||
      location.y > this.boundary.y ||
      location.x < 0 ||
      location.y < 0
    );
  }
}

module.exports = Plateau;
