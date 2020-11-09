function duplicateArray(arr, n) {
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (arr[i] < arr[j])
        break
      }
      if (j == n-1){
        console.log(arr[i])
      }
  }
  return arr
}
// # Driver Code  
arr = [12, 34, 54, 2, 3,2] 
n = arr.length
let temp =duplicateArray(arr, n);
console.log(temp);
