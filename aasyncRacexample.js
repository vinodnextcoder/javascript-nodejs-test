var async = require("async");
var asyncCtrl = {};
var contacts = [
    {
        "firstName": "pradip",
        "lastName": "Nashik",
        "number": "9943236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Nitint",
        "lastName": "Pod",
        "number": "999999",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    }
];
function lookUpProfile(firstName, prop){
    for(var i=0; i<contacts.length ;i++){
      if(contacts[i].firstName === firstName){
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        }else{
          return "No such property";
        }
      }
    }return "No such contact";
}
    function asyncRaceExample(req, res) {
        async.race([
            function (callback) {
                let msg = lookUpProfile("pradip", "likes");
                callback(null, msg)
            }
        ],
            function (err, result) {
                console.log('The result is ', result);
                res.json(result);
            });
    };
asyncCtrl.asyncRaceExample = asyncRaceExample
module.exports = asyncCtrl;