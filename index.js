(function(){

  'use strict';

  var charge = document.getElementById('js-charge'),
      level = document.getElementById('js-level'),
      chargingTime = document.getElementById('js-charging-time'),
      dischargingTime = document.getElementById('js-discharging-time');

  navigator.getBattery().then(function(battery) {
    charge.innerHTML = 'charge: ' + (battery.charge ? 'yes' : 'no');
    level.innerHTML = 'level: ' + (battery.level * 100) + '%';
    chargingTime.innerHTML = 'charging time: ' + battery.chargingTime + 's';
    dischargingTime.innerHTML = 'discharging time: ' + battery.dischargingTime + 's';

    battery.addEventListener('chargingchange', function(event) {
      console.log('chargingchange');
      console.log(new Date);
      console.log(event);

      charge.innerHTML = 'charge: ' + (battery.charge ? 'yes' : 'no');
    }, false);

    battery.addEventListener('levelchange', function(event) {
      console.log('levelchange');
      console.log(new Date);
      console.log(event);

      level.innerHTML = 'level: ' + (battery.level * 100) + '%';
    }, false);

    battery.addEventListener('chargingtimechange', function(event) {
      console.log('chargingtimechange');
      console.log(new Date);
      console.log(event);

      chargingTime.innerHTML = 'charging time: ' + battery.chargingTime + 's';
    }, false);

    battery.addEventListener('dischargingtimechange', function(event) {
      console.log('dischargingtimechange');
      console.log(new Date);
      console.log(event);

      dischargingTime.innerHTML = 'discharging time: ' + battery.dischargingTime + 's';
    }, false);
  });

}());
