const rotatearr=(arr, index, n)=>{
  var temp=[...arr];
  for(i=0;i<arr.length-1;i++)
      temp[index[i]]=arr[i]
  // console.log(temp)
  for (var i = 0; i < n; i++) {
    arr[i] = temp[i];
    index[i] = i;
  }
 console.log(index)
}

var arr = [50, 40, 70, 60, 90];
var index = [3, 0, 4, 1, 2];
var n = arr.length;
rotatearr(arr,index,n)