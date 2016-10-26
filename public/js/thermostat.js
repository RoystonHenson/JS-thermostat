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
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false;
  this.maxTemperature = 32;
};
Thermostat.prototype.reset = function() {
  this.temperature = 20;
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
