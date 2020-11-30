function myAsyncCall(callback) {
  console.log('Async call executed')
  setTimeout(callback, 1000)
}

function Callback() {
  console.log(' Callback is  started')
  let result = [10, 5, 20, 100].every(function(number){
    return number < 150
})
console.log(result) 
console.log(' Callback was executed')
}

myAsyncCall(Callback)