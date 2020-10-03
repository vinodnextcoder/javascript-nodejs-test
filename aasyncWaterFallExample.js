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
module.exports = funcsave;