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
function asyncTimesExample(req, res) {
    async.times(1, function (n,cb) {
        let str="NITIN"
        let msg = palindrome(str) 
        let reverseStr=reverseString("hello")
        let multiplesThreeAndFiveNM=multiplesThreeAndFive (10) 
        var ar = [5, 6, 7, 8, 1, 2, 12, 14]
        let sort =bubbleSort(ar)
        let finalObj = {
            msg,
            reverseStr,
            multiplesThreeAndFiveNM,
            sort
        }
        cb(null, finalObj)
    }, function (err, users) {
        res.json(users);
    });
};
asyncCtrl.asyncTimesExample=asyncTimesExample
function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    let rev = str.split('').reverse().join('');
    test=str === rev;
    let msg="";
    if (test){
        msg="Number is Palimdrome"
    }
    else{
        msg="Number is Not Palimdrome"
    }
  let msgResponse=  {
      "Input String":str,
      "Output String":rev,
      "msg":msg
    }
    return msgResponse
  }
  function reverseString(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }
  function multiplesThreeAndFive (num) {
    let total = 0
    // total for calculating the sum
    for (let i = 0; i <= num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i
      }
    }
    return total
  }
  
  function bubbleSort (items) {
    const length = items.length
    for (let i = (length - 1); i > 0; i--) {
      // Number of passes
      for (let j = (length - i); j > 0; j--) {
        // Compare the adjacent positions
        if (items[j] < items[j - 1]) {
          // Swap the numbers
          [items[j], items[j - 1]] = [items[j - 1], items[j]]
        }
      }
    }
  }
  
  
module.exports = asyncCtrl;