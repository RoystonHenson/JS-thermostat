
function Thermostat() {
  var DEFAULT_TEMP = 20;
  this.temperature = DEFAULT_TEMP;
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
  this.temperature = DEFAULT_TEMP;
};
Thermostat.prototype.display = function() {
  if(this.temperature < 18) {
    return 'Green';
  } else if(this.temperature > 25) {
    return 'Red';
  } else {
    return 'Yellow';
  }
};
