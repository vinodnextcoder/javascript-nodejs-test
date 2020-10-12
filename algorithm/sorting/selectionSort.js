let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // console.log(i)
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      // console.log(min)
      if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
          console.log( arr[min])
      }
  }
  console.log(arr)
  return arr;
}
arr= [64 ,25,12,22,11]

// Find the minimum element in arr[0...4]
// and place it at beginning
// 11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
// 11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
// 11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
// 11 12 22 25 64 
var rainbow =[64 ,25,12,22,11]
selectionSort(rainbow)
