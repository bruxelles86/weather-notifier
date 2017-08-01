function AlertContainer() {
    this.alerts = []
}

AlertContainer.prototype.create = function(alert) {
    this.alerts.push(alert)
}

AlertContainer.prototype.all = function() {
    return this.alerts
}

module.exports = AlertContainer