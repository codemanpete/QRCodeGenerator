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

var line1 = " \u2585\u2585\u2585\u2585\u2585\u2585 ";
var line2 = " \u2589 \u2585\u2585 \u2589 ";
var line3 = " \u2589 \u2580\u2580 \u2589 ";
var line4 = " \u2580\u2580\u2580\u2580\u2580\u2580 ";

console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);