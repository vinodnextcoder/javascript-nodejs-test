// The idea of counting sort is to start by initializing an auxiliary array of length k,
//  that will hold the count of each number. Each index has an initial value of 0. After that, 
//  you loop through the input array and increase the “count” for each value by 1 every time 
//  you encounter that number in the array. Now, the auxiliary array holds the number of times
//   each element is in the input array. The last step is to loop from the minimum value to the
//    maximum value. In this loop, you’ll loop through each corresponding value in the count array,
   
//    and add the elements who’s count is greater than 0 to the array in sequential order. 
//    You add each item by using a secondary incrementing variable (e.g. if we’re using “i” to 
//     loop from the min to max values, then we’ll use “j” to loop through the array), then 
//     increasing that second incrementing variable so the next item is placed in the
//      next highest array index, and finally you decrease the value of the current item in 
// the count array so that you don’t add too many of elements that value. 

let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};
var rainbow =[5,3,1,4,6];
let output=countingSort(rainbow,0,6);
console.log(output);