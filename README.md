# weather-notifier
The attractively named, 'weather-notifier application (in progress) is a collaboration between [Will Gant](www.github.com/bruxelles86) (based in Belgium) and [Robert Jones](www.github.com/robert-g-j) (living out of a bag in London/Portsmouth).

### What problem will this solve?
Being in a fantastically weather-rich country, it's imperative to know what the forecast says to be able to plan your free time.

Being the busy young rapscallions we are, often this happens all too late and we find ourselves not capitalising on a fantastic forecast.

### What will it do?
We aim to create a pure vanilla JS/ Node.js application that:
- Receives weather conditions from a user that they would like to be alerted to;
- Uses the alerts to (asynchronously) call a weather API, using the ES6 Javascript 'Promise';
- Alert a user when their weather conditions appear in the forecast.

### What technologies does it use?
- **Framework**: [Node.js](www.nodejs.org)
- **Testing**: [Jasmine](https://jasmine.github.io/2.0/node.html)
- **Package Manager**: [npm](www.npmjs.com)

### Where from here?

1. To achieve MVP: solve conundrum in 'Interface' constructor where a Promise.all statement in 'checkAlerts' is not returning
2. Create UI for adding alerts, TDDing from front to back
3. Extend to DB: currently alerts are (intentionally) held in memory. We have designed the application such that we can pass the stored alert-information into a database like MongoDB in the same formate as the JSON it is currently stored in.
4. Integrate Hound, Travis and Code Climate, so that there are clear measures of coverage, build status and that code is in an acceptable style.
5. Create a new 'surf-notifier', that extends this concept to a multitude more variables


### How to install/run:
Clone/fork this repo (https://www.github.com/bruxelles86/weather-notifier.git), then:
```
$ cd path/to/response
$ npm install
```
And to run the tests:
```
$ jasmine
```
