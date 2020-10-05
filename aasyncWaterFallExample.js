var express = require("express");
var async = require("async");
var funcsave = {};
function asyncwaterExample(req, res) {
    async.waterfall({
        function1: function(callback) {
            let data="waterfall function 1 running";
            functionTest(data,callback) 
        },
        function2: function(value,callback) {
            let data="waterfall function 2 running";
            functionTest(data,callback) 
        }
    }, function(err, results) {
        console.log(results);
        res.json(results);
    });
}
funcsave.asyncwaterExample = asyncwaterExample
function functionTest(argument,callback) {
   callback(null, argument);
}
function asyncparallelExample(req, res) {
    async.waterfall({
        function1: function(callback) {
            let data="function 1 running";
            functionTest(data,callback) 
        },
        function2: function(callback) {
            let data="function 2 running";
            functionTest(data,callback) 
        }
    }, function(err, results) {
        console.log(results);
        res.json(results);
    });
}
funcsave.asyncparallelExample = asyncparallelExample

function asyncEachExample(req, res) {
    async.series({
        1: function (callback) {
            var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            let position = linearSearch(ar, 3)
            let msg = ""
            if (position !== -1) {
                msg = 'The element was found at ' + (position + 1)
            } else {
                msg = 'The element not found'
            }
            callback(null, msg)
        },
        2: function (callback) {
            var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
           let  position= binarySearch(ar, 8)
           let msg = ""
            if (position !== -1) {
                msg = 'The element was found at ' + (position + 1)
            } else {
                msg = 'The element not found'
            }
            callback(null, msg)
        },
        3: function (callback) {
            var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            var removed = arr.splice(2,2);
            msg = 'The element was found at ' + (removed)
            callback(null, msg)
        }
    },
        function (err, results) {
            res.json(results);
        });
}
funcsave.asyncEachExample = asyncEachExample
function linearSearch(array, toFind){
    for(let i = 0; i < array.length; i++){
      if(array[i] === toFind) return i;
    }
    return -1;
  }

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
module.exports = funcsave;