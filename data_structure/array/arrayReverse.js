const reverseList = (arr, start, end) => {
    while (start < end){
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    }
    return arr;
};

let arrr = [2, 2, 3, 12, 5, 6, 7] 
let n = arrr.length
let f=reverseList(arrr, 0, n-1);
console.log(f)
let array =[[2, 2, 3, 12, 5, 6, 7] ]
var reversed = array.map(function reverse(item) {
    return Array.isArray(item) && Array.isArray(item[0]) 
               ? item.map(reverse) 
               : item.reverse();
});
console.log(reversed)