var Promise = require('promise');

function AsyncCall() {
  console.log("Asyn call Exmaple Started")

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000) 
  }) 
}

function Promisecall() {
  console.log('Promise Executtion started')
  let newArray = [1, 2, 3, 4, 5].map(function(number){
    return number * 2
})
console.log("#######>>>######",newArray)
  console.log('Promise Executed')
}

AsyncCall().then(Promisecall)

// / create a string
const names = ['John', 'Peter', 'Mary'];
const firstName = 'John'

const hasMyName = names.some(name => name === firstName);