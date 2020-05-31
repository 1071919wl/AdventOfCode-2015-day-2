const fs = require('fs');
var text = fs.readFileSync("./input.txt").toString('utf-8');
var textByLine = text.split("\n")
let array = [];
for (let y=0; y<textByLine.length; y++){
  array.push(textByLine[y].split('x').map(x=>+x));
}
// console.log(array);
// ===========================================SOLUTION=======================
// CLOSE
// const array = [
//   [2, 3, 4],
//   [1, 1, 10]
// ]


let something = [];

for (let w=0; w<array.length; w++){
    const lwh = (
      (array[w][0]*array[w][1]*array[w][2])
    );
    something.push((lwh))
};
// console.log(something);
var sum = something.reduce(function(a, b){
      return a + b;
  }, 0);
  // console.log(sum);


let something3 = [];

for (let g=0; g<array.length; g++){
  res = array[g].sort((a,b) => a-b)
  .slice(0,2);
  something3.push((res))
}
// console.log(something3)

let something2 = [];
  for (let n=0; n<something3.length; n++){
    something2.push(something3[n][0]+something3[n][0]+something3[n][1]+something3[n][1])
  }
// console.log(something2);
var sum2 = something2.reduce(function(a, b){
      return a + b;
  }, 0);
  // console.log(sum2);

  let ribbon = sum+sum2;
  console.log('total ft of ribbon:', ribbon);




// ===========================================SOLUTION END=======================
//