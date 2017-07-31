const weatherGetter = require('../src/WeatherGetter.js')

// request at a specific location- test for response containing location

describe('weatherGetter', function() {
  it('brings back weather data from api', function() {
    var weatherGetter = new WeatherGetter();
    var location = 'Bruges';
    weatherGetter.getApiData(location);
    
  });
})
