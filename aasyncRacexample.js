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
    async.times(5, function (n, next) {
        let msg = lookUpProfile("pradip", "likes");
        next(null, msg)
    }, function (err, users) {
        res.json(users);
    });
};
asyncCtrl.asyncRaceExample = asyncRaceExample
function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
    return output;
}
module.exports = asyncCtrl;