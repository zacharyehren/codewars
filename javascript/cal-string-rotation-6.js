//Exercise - https://www.codewars.com/kata/calculate-string-rotation/train/javascript

function shiftedDiff(first,second){
  var firstArray = first.split("");
  var secondArray = second.split("");
  var count = 0;
  var firstLetter;
  for (var i = 0; i <= firstArray.length; i++) {
    if (firstArray[i] != secondArray[i]) {
      firstLetter = firstArray.shift();
      console.log(firstLetter);
      firstArray.push(firstLetter);
      count++;
    }
  }
  console.log(firstArray);
  console.log(secondArray);
  return count;
}



//Solution
function shiftedDiff(first,second){
  if (first.length != second.length) return -1
  return (second + second).indexOf(first)
}
