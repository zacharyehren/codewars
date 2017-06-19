//Exercise - https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  var array = str.split(" ");
  var removeLetter;
  var firstLetter;
  var newArray = [];
  var pig;
  for (var i = 0; i < array.length; i += 1) {
      firstLetter = array[i].charAt(0);
      removeLetter = array[i].substring(1);
      pig = removeLetter + firstLetter + "ay"
      newArray.push(pig)
     };
  return newArray.join(" ");
}
