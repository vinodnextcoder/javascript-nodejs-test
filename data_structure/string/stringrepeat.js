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
  