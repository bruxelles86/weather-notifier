const Interface = require('../src/Interface.js')

describe('Interface', function() {
   it('ends up calling the notifier', function(){
      var interface = new Interface()
      interface.notifier = jasmine.createSpy("fakeNotifier")
      interface.add('London', 15, '2017-08-20')
      interface.checkAlerts();
      expect(interface.notifier).toHaveBeenCalled();
   });
});