// A simple solution is to traverse the complete array and find a minimum. This solution requires O(n) time. 
// We can do it in O(Logn) using Binary Search. If we take a closer look at the above examples, we can easily figure out the following pattern:

// The minimum element is the only element whose previous is greater than it. If there is no previous element, then there is no rotation (the first element is minimum). We check this condition for the middle element by comparing it with (mid-1)’th and (mid+1)’th elements.
// If the minimum element is not at the middle (neither mid nor mid + 1), then the minimum element lies in either the left half or right half. 
// If the middle element is smaller than the last element, then the minimum element lies in the left half
// Else minimum element lies in the right half.
const findMin = (arr, low, high) => {
    // # This condition is needed to handle the case when array is not 
    // # rotated at all 
    if (high < low) 
        return arr[0] 
    // # If there is only one element left 
    if (high == low) 
        return arr[low] 
    // # Find mid 
    mid = parseInt((low + high)/2)
    // # Check if element (mid+1) is minimum element. Consider 
    // # the cases like [3, 4, 5, 1, 2] 
    if (mid < high && arr[mid+1] < arr[mid]) 
        return arr[mid+1] 
    // # Check if mid itself is minimum element 
    if (mid > low && arr[mid] < arr[mid - 1])
        return arr[mid] 
    // # Decide whether we need to go to left half or right half 
    if (arr[high] > arr[mid])
        return findMin(arr, low, mid-1) 
    return findMin(arr, mid+1, high)
};
arr1 = [5, 6, 1, 2, 3, 4] 
n1 = arr1.length 
let temp=findMin(arr1, 0, n1-1)

console.log(temp);
