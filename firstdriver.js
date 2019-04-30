function retArrayOfNums () {
  var arr = [];
  for (var i = 0; i < 25; ++i) {
    var anArray = [];
    for (var j = 0; j < 25; ++j) {
      var num = Math.floor(Math.random() * 2);
      if (num === 1) {
        anArray.push("\u2589");
      } else {
        anArray.push(" ");
      }
    }
    arr.push(anArray);
  }
  return arr;
}

function print2DArr(arr) {
  for (var i = 0; i < arr.length; ++i) {
    var s = arr[i].join("");
    console.log(s);
  }
}