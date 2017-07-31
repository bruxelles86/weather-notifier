const http = require('http');

function WeatherGetter() {

};

WeatherGetter.prototype.getApiData = function() {
    var promise = new Promise(function(resolve, reject) {
      var url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d1f3365447a2494cb8b115449170706&q=London&format=json&num_of_days=20'


      http.get(url, (res) => {
        let rawData = '';
        res.on('data', function(chunk) {
          rawData += chunk;
        });
        res.on('end', function() {
          resolve(rawData);
        });
      });


    });
    return promise;
};

module.exports = WeatherGetter;
