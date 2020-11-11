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
var array1 = ['a','b','c','d','e','f','g']
var j = array1.length 

for(var i = 0; i < array1.length ; i++){
    console.log(array1[j])
    j=j-1 }

    for(var i=1;i<=5;i++)
    {
        for(var j=1;j<=i;j++)
            {
                console.log("*");
                
            }
        console.log("\n");
    }


   
    var removeItem = [1,2];
    removeItem.forEach(function(id){
       var itemIndex = a.findIndex(i => i.id == id);
       a.splice(itemIndex,1);
    });
    console.log(a);