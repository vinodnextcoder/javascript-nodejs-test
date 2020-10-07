var async = require("async");
var asyncCtrl = {};
function asyncRaceExample(req, res) {
    async.race([
        function (callback) {
            setTimeout(function () {
                callback(null, 'one');
            }, 300);
        },
        function (callback) {
            setTimeout(function () {
                callback(null, 'two');
            }, 100);
        }
    ],
    function (err, result) {
        console.log('The result is ', result);
        res.json(result);
    });
};
asyncCtrl.asyncRaceExample = asyncRaceExample
module.exports = asyncCtrl;