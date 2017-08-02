const AlertMatcher = require('../src/AlertMatcher.js');

var apiStubLondon, apiStubParis, apiResponses, alert1, alert2

apiStubLondon =
{
  data:
  {
    weather: [
      {
        maxtempC: 25,
        date: "2017-08-20"
      }
    ],
    request: [
      {
        query: "London, United Kingdom"
      }
    ]
  }
}

apiStubParis =
{
  data:
  {
    weather: [
      {
        maxtempC: 19,
        date: "2017-08-20"
      }
    ],
    request: [
      {
        query: "Paris, France"
      }
    ]
  }
}
apiResponses = [apiStubParis, apiStubLondon]

alert1 = { locations: ['London'], dates: ["2017-08-20"], conditions: { temperature: 25 } }

alert2 = { locations: ['Paris'], dates: ["2017-08-20"], conditions: { temperature: 25 } }

alertsStub = [alert1, alert2]

describe("AlertMatcher", function() {
  it('match an alert with an api stub', function() {
    alertMatcher = new AlertMatcher();
    expect(alertMatcher.check(apiResponses, alertsStub)).toEqual([alert1]);
  });
});
