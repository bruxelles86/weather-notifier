const Alert = require('../src/Alert.js');

describe('Alert Model', function() {
  it('exists with location and temperature', function() {
    var date = new Date();
    var alert = new Alert('London', 25, date);
    expect(alert.locations).toEqual(['London']);
    expect(alert.dates).toEqual([date]);
    expect(alert.conditions.temperature).toEqual(25);
  });
});
