const Alert = require('./Alert.js')
const AlertContainer = require('./AlertContainer.js')
const AlertMatcher = require('./AlertMatcher.js')
const Notifier = require('./Notifier.js')
const WeatherGetter = require('./WeatherGetter.js')

function Interface() {
    this.notifier = new Notifier();
    this.alertContainer = new AlertContainer();
    this.alertMatcher = new AlertMatcher();
    this.weatherGetter = new WeatherGetter();
}

Interface.prototype.add = function(location, temperature, date) {
    this.alertContainer.create(new Alert(location, temperature, date));
};

Interface.prototype.locationsToCheck = function() {
    var locations = []
    this.alertContainer.forEach(function(alert) {
        if(locations.includes(alert.location[0]) === false) {
            locations.push(alert.location[0])
        } 
    });
    return locations
}

Interface.prototype.checkAlerts = function() {
    
}

module.exports = Interface;