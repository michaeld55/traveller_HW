const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  result = this.journeys.map(journey => journey.startLocation);
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  result = this.journeys.map(journey => journey.endLocation);
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  result = this.journeys.filter(journey => journey.transport === transport);
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  result = this.journeys.filter(journey => journey.distance > minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  result = this.journeys.reduce((total, journey) => journey.distance += total, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = [...new Set(this.journeys.map(journey => journey.transport))];
  return result
};

module.exports = Traveller;
