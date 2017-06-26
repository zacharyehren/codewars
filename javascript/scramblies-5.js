//Exercise - https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
 var array1 = str1.split("").sort();
 var array2 = str2.split("").sort();
 var updatedArray1 = array1.splice(0, (array1.length - array2.length));
 var array1String = updatedArray1.join(" ");
 var array2String = array2.join(" ");
//  if (array1String == array2String) {
//    return true;
//  } else {
//  return false;
//   }
console.log(array1String);
console.log(array2String);
console.log(array1);
}
