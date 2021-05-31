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
ar = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
m = ar.length;

arrayOrder(ar,m)