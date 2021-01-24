function isIsogram(str){
    let obj = new Set();
  
    for(let i = 0; i < str.length; i++){
      if(obj.has(str[i])){
        return false
      }else{
        obj.add(str[i])
      }
    }
    return true
  }
  
 console.log(isIsogram("Dermatoglyphics")) // true
 console.log(isIsogram("aba"))// false

 function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i]; // or newString = newString + str[i];
  }
  return newString; // "olleh"
}

console.log(reverseString('hello'))
