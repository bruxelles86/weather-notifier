function Alert(locations, temperature, dates) {
  this.locations = [locations];
  this.dates = [dates];
  this.conditions = {
    temperature: temperature
  };
}




module.exports = Alert;
