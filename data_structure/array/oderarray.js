arrayOrder = (arr, n) => {
  var i, j, temp;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      console.log(i,arr[j])
      if(arr[j]===i){
        temp=arr[j]
        arr[j]=arr[i]
        arr[i]=temp;
        break;
      }
    }
  }
  for (i = 0; i < n; i++)
  {
   
    // If not present
    if (ar[i] != i) {
      ar[i] = -1;
    }
  }
  // console.log(">>>>>>>>>>#####",arr) 
}
var m,
ar = [-1, -1,0, 6, 1, 9, 3, 2, -1, 4, -1];
m = ar.length;

// arrayOrder(ar,m)


var moveNegative=(arr,n)=>{
  let j=0;
  for (i=0;i<n;i++){
    if(arr[i]<=0){
     if(i!=j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
     }
     j++;
    }
  }
  // console.log(arr);
}

// moveNegative(ar,m)

var rotateLeft=(arr,n,k)=>{
let mod=k%n;
let arra=[]
for(i=0;i<n;i++){
  console.log((mod + i) % n)
  arra.push(arr[(mod + i) % n])
  // console.log(arr[(mod + i) % n]);
}
console.log("######################")
console.log(arr)
console.log(arra)

}
rotateLeft(ar,m,2)