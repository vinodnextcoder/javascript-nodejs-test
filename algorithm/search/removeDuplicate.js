function duplicateArray(arr, n) {
  let removeArray=[]
  for (var i=0; i<arr.length; i++) {
    const found = removeArray.find(element => element ==arr[i]);
    if(!found){
      removeArray.push(arr[i])
    }
  }
   return removeArray;
}
// # Driver Code  
arr = [12, 34, 54, 2, 3,2] 
n = arr.length
let temp =duplicateArray(arr, n);
console.log(temp);
