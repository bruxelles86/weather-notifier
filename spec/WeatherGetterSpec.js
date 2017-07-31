const WeatherGetter = require('../src/WeatherGetter.js')

// request at a specific location- test for response containing location

describe('weatherGetter', function() {
  it('brings back weather data from api', function(done) {
    var weatherGetter = new WeatherGetter();
    weatherGetter.getApiData('London').then(function(apiResponse) {
      expect(apiResponse).toBeTruthy();
      done();
    });
  }, 5000);
  
  it('brings back weather for a given city', function(done) {
    var weatherGetter = new WeatherGetter();
    weatherGetter.getApiData('Paris').then(function(apiResponse) {
      expect(apiResponse).toContain('Paris')
      done();
    });
  }, 5000)
})

