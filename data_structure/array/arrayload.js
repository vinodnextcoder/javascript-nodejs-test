function load() {
    var list = [];
    var keyArray = ["one","two","three","four","five"];
  for (var i = 0; i < keyArray.length; i++) {
        var item = localStorage.getItem(keyArray[i]);
       if (item.charAt(0) == "+") {
            item = parseFloat(item.substring(1));
      }
        list.push(item);
  }
    return list;
}
let str=`JavaScript first appeared ${a+b} years ago. Wow!`;