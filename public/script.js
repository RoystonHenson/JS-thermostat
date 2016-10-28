var thermostat = new Thermostat();

function getTemperature(){
  document.getElementById("temperature").innerHTML = thermostat.temperature;
}
getTemperature();

$(document).on('click', '#up', function() {
  thermostat.up();
  getTemperature();
});

$(document).on('click', '#down', function() {
  thermostat.down();
  getTemperature();
});

$(document).on('click', '#reset_thermostat', function() {
  thermostat.resetThermostat();
  getTemperature();
});

$(document).on('click', '#save_on', function() {
  thermostat.powerSavingOn();
  getTemperature();
});

$(document).on('click', '#save_off', function() {
  thermostat.powerSavingOff();
});
