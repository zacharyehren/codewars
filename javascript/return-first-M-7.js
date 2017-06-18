//Exercise - https://www.codewars.com/kata/593c9175933500f33400003e

function multiples(m, n){
  var array = [];
  var i = 1;
  var multiple;
  while ( i <= m) {
    multiple = n * i;
    i++;
    array.push(multiple);
  }
  return array;
}
