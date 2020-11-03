let rotation = (arr) => {
    let len = arr.length;
    let min_index, min;
    min = arr[0] ;
    for (let i = 0; i < len; i++) {
        if (min > arr[i]) {
            min = arr[i]
            min_index = i
        }
    }
    return min_index
}
arr = [15, 18, 2, 3, 6, 12] 
let totata=rotation(arr);
console.log(totata)