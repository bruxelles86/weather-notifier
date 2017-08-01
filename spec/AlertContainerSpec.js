const AlertContainer = require('../src/AlertContainer')

describe('AlertContainer', function() {
   it('adds alerts to the alert store', function() {
       var alert = { "title": "dummy alert"}
       var alert2 = { "title": "dummy alert 2"}
       var alertContainer = new AlertContainer()
       alertContainer.create(alert)
       alertContainer.create(alert2)
       expect(alertContainer.all()).toEqual([alert, alert2])
   });
});