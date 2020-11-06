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