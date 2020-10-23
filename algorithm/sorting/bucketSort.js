// Bucket sort is at its best when it can distribute elements evenly throughout the buckets.
// If values are sparsely allocated, a larger bucket size is more optimal
//  because the values can be separated more evenly.
//   The opposite is also true where a densely allocated array would perform better with a smaller bucket size.
// You should normally only use bucket sort when you generally
//  know that elements will be evenly distributed, and when memory usage is not an issue.

// Simplified Pseudocode
// Import some type of insertion sort to use in bucket sort function
// Create bucketSort function (array, bucket size)
//   Create vars for i, min, max, and bucket size
//   Find min and max value
//   Create amount of buckets
//   Push values to correct buckets 
//   Sort buckets
// Code
// A common implementation of bucket sort works by splitting the array of size n into k buckets 
// which holds a specific range of element values.
//  These buckets are then sorted using a sorting algorithm which can be chosen based on the expected input size.

const arr = [5,3,1,4,6];
const bucketSort = arr => {
   if (arr.length === 0) {
      return arr;
   }
   let i,
   minValue = arr[0],
   maxValue = arr[0],
   bucketSize = 5;
   arr.forEach(function (currentVal) {
       console.log(currentVal);
      if (currentVal < minValue) {
         minValue = currentVal;
      } else if (currentVal > maxValue) {
         maxValue = currentVal;
      }
   })
   let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
   let allBuckets = new Array(bucketCount);
   for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
   }
   arr.forEach(function (currentVal) {
      allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
   });
   arr.length = 0;
   allBuckets.forEach(function(bucket) {
       console.log(bucket);
      insertion(bucket);
      bucket.forEach(function (element) {
         arr.push(element)
      });
   });
   return arr;
}
const insertion = arr => {
   let length = arr.length;
   let i, j;
   for(i = 1; i < length; i++) {
      let temp = arr[i];
      for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
         arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
   }
   return arr;
};
console.log(bucketSort(arr));