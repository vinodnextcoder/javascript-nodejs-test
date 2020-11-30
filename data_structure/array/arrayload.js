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