var exec = require('cordova/exec');

module.exports.add = function(arg0, success, error) {
    exec(success, null, "Adder", "performAdd", arg0);
};