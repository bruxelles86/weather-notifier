var Notifier = require('../src/Notifier.js');

var hitAlerts = [{ locations: ['London'], dates: ["2017-08-20"], conditions: { temperature: 25 } }]

describe('The Notifier', function() {
  it('prints notification of alert to console', function() {
    var notifier = new Notifier();
    var realConsoleLog = console.log;
    console.log = jasmine.createSpy("log");
    notifier.print(hitAlerts)
    expect(console.log).toHaveBeenCalledWith("It will be over 25C in London on 2017-08-20");
    console.log = realConsoleLog;
  })
});
