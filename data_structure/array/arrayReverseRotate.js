// Let the array be arr[] = [1, 2, 3, 4, 5, 6, 7], d =2 and n = 7 
// A = [1, 2] and B = [3, 4, 5, 6, 7] 
 

// Reverse A, we get ArB = [2, 1, 3, 4, 5, 6, 7]
// Reverse B, we get ArBr = [2, 1, 7, 6, 5, 4, 3]
// Reverse all, we get (ArBr)r = [3, 4, 5, 6, 7, 1, 2]
let reverseArray = (arr, start, end) => {
    while (start < end) {
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start += 1
        end = end - 1
    }
}

let reverseArray = (arr, d) => {
    if (d == 0):
        return
    n = len(arr)
    // # in case the rotating factor is
    // # greater than array length
    d = d % n
    reverseArray(arr, 0, d - 1)
    reverseArray(arr, d, n - 1)
    reverseArray(arr, 0, n - 1)
}