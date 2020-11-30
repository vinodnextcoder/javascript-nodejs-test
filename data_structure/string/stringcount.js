// We need to keep track of every character in the string as well as the number of times it exists.
// let charMap = {};

// for (let char of text) {
//     if (charMap.hasOwnProperty(char)) {
//         charMap[char]++
//     } else {
//         charMap[char] = 1;
//     }
// }

function maxRecurringChar(text) {
  let charMap = {}
  let maxCharValue = 0
  let maxChar = ''

  for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
          charMap[char]++
      } else {
          charMap[char] = 1
      }
  }

  for (let char in charMap) {
      if (charMap[char] > maxCharValue) {
          maxCharValue = charMap[char]
          maxChar = char
      }
  }

  return maxChar
}
let temp=maxRecurringChar('vindiiiii') 
console.log("Most recurring character",temp)