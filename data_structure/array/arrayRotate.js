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

console.log("####################SECOND######################");

const rotationArray = (arr, d, n) => {
    d = d % n
    let g_c_d = findGCD(d, n)
    for (i = 0; i < g_c_d; i++) {
        temp = arr[i]
        j = i
        while (1) {
            k = j + d
            console.log(k,n);
            if (k >= n)
                k = k - n
            if (k == i)
                break
            arr[j] = arr[k]
            j = k
        }
        arr[j] = temp
    }
    return arr;
};

const findGCD = (a, b) => {
    if (b == 0)
        return a;
    else
        return findGCD(b, a % b)
};

let arrr = [1, 2, 3, 4, 5, 6, 7] 
let n = arrr.length
let d = 2
let f=rotationArray(arr, d, n);
console.log(f)