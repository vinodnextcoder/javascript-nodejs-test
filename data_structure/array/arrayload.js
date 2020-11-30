var inputData = [ { id: 1, title: 'hippo', faveFood: 'carrots' },
 { id: 2, title: 'Cat', faveFood: 'carrots' }, 
 { id: 3, title: 'ducks', faveFood: 'breadcrumbs' }, ]

 function findFood(title){
   let foodName= _.find(inputData,function(ele){
     return ele.title==title
   })
   return foodName;
 }
 let fname=findFood("Cat");
 console.log(fname)
// custom filter
function arrayFilter(arr, func) {
  for (let elem of arr) {
    if (func(elem)) {
      return elem
    }
  }
  return undefined
}
 function arrayFilter(arr, func) {
  let filteredArray = arr.filter(func);
  return filteredArray[0] ? filteredArray[0] : undefined;
}


Array.prototype.mfilter =  function (fun) {
  var filtered = [];
  for(let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

var returnedArr = [1,2,3,4,5,6].mfilter(function(element, index, arr) {
  return element > 5;
});

console.log(returnedArr);