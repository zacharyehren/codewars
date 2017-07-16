//Exercise - https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  var counts = {};
  var arrayCount;
  var i;
  for(var i = 0; i < A.length; i++) {
    var num = A[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  // for (arrayCount in counts) {
  //   if (arrayCount % 2 == 1) {
  //     return counts[arrayCount];
  //   }
  // }
}
