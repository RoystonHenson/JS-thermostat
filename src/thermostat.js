var MINIMUM_TEMPERATURE = 10;

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.maxTemperature = 25;
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
  if (this.temperature <= 10){
    return;
  }
  else{
  this.temperature --;
  }
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  this.maxTemperature = 25;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
  this.maxTemperature = 32;
};
