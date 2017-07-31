const weatherGetter = require('../src/WeatherGetter.js')

// request at a specific location- test for response containing location

describe('weatherGetter', function() {
  it('brings back weather data from api', function(done) {
    var weatherGetter = new WeatherGetter();
    var location = 'Bruges';
    weatherGetter.getApiData(location).then(function(apiResponse) {
      expect(apiResponse).toBeTruthy();
      done();
    });
  }, 5000);
})
