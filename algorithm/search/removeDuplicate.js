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
// console.log(temp);

function duplicateEle(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log(arr[i])
      }
    }
  }
  return -1
}
arrr = [12, 34, 54, 2, 3,2] 
n = arrr.length
let tempq =duplicateEle(arrr, n);
