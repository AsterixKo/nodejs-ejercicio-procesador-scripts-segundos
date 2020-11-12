const moduloDateModule = require('./lib/dateModule.js');

var interval = setInterval(function () {
    console.log(moduloDateModule.generateDate());
}, 1000);
