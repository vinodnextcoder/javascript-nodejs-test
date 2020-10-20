// Conceptually this is how merge sort works

// Divide the given unsorted elements into n sub element list, 
// each containing only one element (A single element is always sorted).
// Repeatedly merge this sub element lists in the
//  required order until there is only one sub element list. At the end the last list will be the sorted.
const mergeSort = (arr) => {
  //Create two arrays for sorting
  let sorted = Array.from(arr);
  let n = sorted.length;
  let buffer = new Array(n);
  
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
      console.log(size *= 2);
      
      //Get the two sub arrays
      let left = leftStart,
          right = Math.min(left + size, n),
          leftLimit = right,
          rightLimit = Math.min(right + size, n);
      console.log(right,rightLimit);
      //Merge the sub arrays
      merge(left, right, leftLimit, rightLimit, sorted, buffer);  
    }
    
    //Swap the sorted sub array and merge them
    let temp = sorted;
    sorted = buffer;
    buffer = temp;
  }
  
  return sorted;
}
const merge = (left, right, leftLimit, rightLimit, sorted, buffer) => {
  let i = left;
  
  //Compare the two sub arrays and merge them in the sorted order
  while (left < leftLimit && right < rightLimit) {
    if (sorted[left] <= sorted[right]) {
      console.log(">>>>>>>>>>>",sorted[left],sorted[right] )
      buffer[i++] = sorted[left++];
    } else {
      buffer[i++] = sorted[right++];
    }
  }

  //If there are elements in the left sub arrray then add it to the result
  while (left < leftLimit) {
    buffer[i++] = sorted[left++];
  }

  //If there are elements in the right sub array then add it to the result
  while (right < rightLimit) {
    buffer[i++] = sorted[right++];
  }
}
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55]));