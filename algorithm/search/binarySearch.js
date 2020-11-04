const binarySearch = (arr, l, r, x) => {
  // # Check base case 
  if (r >= l) {
    mid = l + (r - l) // 2
    // # If element is present at the middle itself 
    if (arr[mid] == x)
      return mid
    // # If element is smaller than mid, then it  
    // # can only be present in left subarray 
    else if (arr[mid] > x)
      return binarySearch(arr, l, mid - 1, x)

    // # Else the element can only be present  
    // # in right subarray 
    else {
      return binarySearch(arr, mid + 1, r, x)
    }
  }
  else {
    return -1
  }
};
// # Driver Code  
arr = [12, 34, 54, 2, 3] 
n = arr.length
x = 3
let index = binarySearch(arr, 0, n-1, x) 
if (index != -1)
    console.log("Element", x,"is present at index %d",index )
else
    console.log("Element %d is not present" ,x)