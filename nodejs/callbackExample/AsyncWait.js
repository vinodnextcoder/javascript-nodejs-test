var Promise = require('promise');
function asynCall() {
console.log('asynCall started')

const names = ['john', 'chris', 'mike', 'holly', 'will']
console.log("Array to convert ot string",names)
console.log("\n");
const stringNames = names.toString()
console.log("    >>  ",stringNames)
console.log("\n");

  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000) 
  })
}

function AsynWaitCall() {
  console.log('Promise Executtion started')
  let newArray = [1, 2, 3, 4, 5].map(function(number){
    return number * 2
})
console.log("#############",newArray)
  console.log('Promise Executed')
}

async function startAsync() {
  await asynCall()
  AsynWaitCall()
}

startAsync()