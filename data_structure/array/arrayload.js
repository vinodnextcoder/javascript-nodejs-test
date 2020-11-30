// JavaScript is single-threaded, which means that only one thing can happen at a time.
//  Synchronous code is executed from top to bottom in the order that the code is written.
//   Synchronous code is also "blocking" –– each line of 
//   code waits for the previous line of code to be executed before it runs.

// In contrast, asynchronous code is "non-blocking" code that allows long-running
//  requests to not block the main JavaScript thread. When the request is finished,
//   additional code can then be executed. This is generally done in one of three ways:

// Callbacks
// Promises
// Async/await
// Callbacks
// A callback function is a function that you pass to an asynchronous function as an argument. The callback function is executed once the asynchronous part of the work is done.

// Let's simulate waiting for an API request to return a response by using the setTimeout method. A callback approach might look like this:
function myAsyncMethod(callback) {
  console.log('myAsyncMethod was executed')
  setTimeout(callback, 1000)
}

function myCallbackMethod() {
  console.log('myCallbackMethod was executed')
}

myAsyncMethod(myCallbackMethod)