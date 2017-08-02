function Notifier() {

}

Notifier.prototype.print = function(matchedAlerts) {
  matchedAlerts.forEach(function(match) {
    console.log(`It will be over ${match.conditions.temperature}C in ${match.locations[0]} on ${match.dates[0]}`);
  });
}

module.exports = Notifier;
