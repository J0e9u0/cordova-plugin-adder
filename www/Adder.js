var exec = require('cordova/exec');

module.exports.add = function(arg0, success, error) {
    // exec(success, error, 'Adder', 'coolMethod', [arg0]);
    exec(success, null, "Adder", "performAdd", [10, 20]);
};