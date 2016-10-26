describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('default temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature with up button', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases the temperature with down button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('minimum temperature is 10 degrees', function(){
    for (var i = 1; i <= 20; i++){
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a max temperature of 25 degrees when power saving mode is on', function(){
    for (var i = 1; i <= 20; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('has a max temperature of 32 degrees when power saving mode is off', function(){
    thermostat.powerSavingOff();
    for (var i = 1; i <= 20; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });
});
