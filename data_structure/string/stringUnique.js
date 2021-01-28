var allUniqueChars = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

console.log(allUniqueChars("AH"))

function everyCharUnique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= 1) {
      
      return false;
    } else {
      console.log(str[i])
      obj[str[i]] = 1;
    }
  }
  return true;
}
console.log(everyCharUnique("AH"))