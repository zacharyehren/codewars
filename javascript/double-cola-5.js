//Exercise - https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

function whoIsNext(names, r){
  var i = 0
  while (i <= r) {
     names.push(names[i], names[i]);
     i++;
   }
  console.log(r);
  console.log(names);
  return names[r - 1];
}
