// quikSort 
// We select a number, called our pivot, which we’ll compare every 
// number to when we loop through our items. The goal is to reorganize
//  the array so it is partitioned into two halves, with everything in 
//  each either being less than or greater than our pivot. When the pivot is
//   in it’s final position we’ll move on to doing the same thing with
// a new pivot, with every pivot being cemented in place until every item has been a pivot at least onc


// Our pointer is just a placeholder for our pivot. Every time our loop progresses,
//  each item is compared to the pivot and if it is smaller it’s swapped with our pointer
//  . Every time we do this is to ensure that the pointer is ahead of everything smaller 
//  than the pivot and before everything that’s larger. When everything is complete, and our array is partitioned, 
// then we can assign the pivot to the pointer’s index as its final position.
const pivot = (arr, start = 0, end = arr.length + 1) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
    
    let pivot = arr[start],
    pointer = start;
    console.log(pointer);
  
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < pivot  ) {
          console.log(pivot);
        pointer++;
        swap(arr, pointer, i);
      }
    };
    swap(arr, start, pointer);
  
    return pointer;
  }
  const quickSort = (arr, start = 0, end = arr.length) => {
    let pivotIndex = pivot(arr, start, end);
  
    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  
    return arr;
  };
  let arra=[30, 20, 10, 50, 22, 33, 55]

  console.log(quickSort(arra));


  function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}
let array=[30, 20, 10, 50, 22, 33, 55]

console.log(quick_Sort(array));