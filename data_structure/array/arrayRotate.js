const leftRotate = (arr, d, n) => {
    var i;
    for (i = 0; i < d; i++) {
        console.log(i);
        leftRotatebyOne(arr, n)
    }
    return arr;
};

const leftRotatebyOne = (arr, n) => {
    let temp = arr[0]
    for (i = 0; i < n; i++) {
        console.log(arr[i]);
        arr[i] = arr[i + 1]
    }
    arr[n - 1] = temp
};
arr = [1, 2, 3, 4, 5, 6, 7] 
let temp=leftRotate(arr, 2, 7) 
console.log(temp);