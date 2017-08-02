function AlertMatcher() {
    this.hits = []
}

AlertMatcher.prototype.check = function(weatherData, alerts) {
    var results = this
    alerts.forEach(function(alert) {
        weatherData.forEach(function(response) {
            if(response.data.request[0].query.includes(alert.locations[0])) {
                response.data.weather.forEach(function(day) {
                    if(day.date === alert.dates[0]) {
                        if(alert.conditions.temperature <= day.maxtempC) {
                            results.hits.push(alert)
                        }
                    };     
                })
            }
        });
    });
    
    return this.hits
};

module.exports = AlertMatcher;