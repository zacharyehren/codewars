//Exercise - https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  var array = str.split(" ");
  for (var i = 0; i < array.length; i++) {
     var letterArray = array[i].split("");
     for (var i = 0; i < letterArray.length; i++) {
     var firstLetter = letterArray.shift();
    var updatedArray = array[i] + firstLetter + "ay";
    console.log(firstLetter);
    var adaptedArray = updatedArray.join("");
    }
  };
  return adaptedArray;
}
