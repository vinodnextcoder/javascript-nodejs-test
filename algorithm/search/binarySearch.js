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


const binarySearchSecond = (arr, l, r, x) => {
  while (l <= r) {
    mid = l + (r - l) // 2;  
    // # Check if x is present at mid 
    if (arr[mid] == x)
      return mid
    // # If x is greater, ignore left half 
    else if (arr[mid] < x)
      l = mid + 1
    // # If x is smaller, ignore right half 
    else {
      r = mid - 1
    }
    return mid
  }
  // # If we reach here, then the element 
  // # was not present 
  return -1
};

arr = [12, 34, 54, 2, 3] 
n = arr.length
x = 34
let indexs = binarySearchSecond(arr, 0, n-1, x) 
if (indexs != -1)
    console.log("Element", x,"is present")
else
    console.log("Element %d is not present" ,x)