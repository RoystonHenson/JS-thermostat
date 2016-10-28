// var DEFAULT_TEMP = 20;
function Thermostat() {

  this.temperature = 20;
  this.powerSavingMode = true;
  this.maxTemperature = 25;
  this.minTemperature = 10;
}

Thermostat.prototype.up = function() {
  if (this.temperature >= this.maxTemperature){
    return;
  }
  else{
    this.temperature ++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature <= this.minTemperature){
    return;
  }
  else{
  this.temperature --;
  }
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  this.maxTemperature = 25;
  if(this.temperature > 25) {
    this.temperature = 25;
  }
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
  this.maxTemperature = 32;
};
Thermostat.prototype.resetThermostat = function() {
  this.temperature = 20;
};
Thermostat.prototype.display = function() {
  if(this.temperature < 18) {
    return 'low usage';
  } else if(this.temperature > 25) {
    return 'high usage';
  } else {
    return 'medium usage';
  }
};
