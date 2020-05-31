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
//   [1, 1, 10],
//   [2, 3, 4],
//   [1, 1, 10]
// ]

//
let something = [];
for (let w=0; w<array.length; w++){
    const lwh = [
      (array[w][0]*array[w][1]),
      (array[w][1]*array[w][2]),
      (array[w][2]*array[w][0]),
    ];
    let small = lwh[2];
      for (let x=0; x<lwh.length; x++){
        if(lwh[x]<small){
          small=lwh[x]
        }
      }
    something.push((2*lwh[0])+(2*lwh[1])+(2*lwh[2])+small)
};
var sum = something.reduce(function(a, b){
      return a + b;
  }, 0);

  console.log('total sqr.ft:', sum);

// ===========================================SOLUTION END=======================
//
// function math (){

  // const array = [
  //   [2, 3, 4],
  //   [1, 1, 10]
  // ]

  // let test = [];
  //   for (let w=0; w<array.length; w++){
  //       const lwh = [
  //         (array[w][0]*array[w][1]),
  //         (array[w][1]*array[w][2]),
  //         (array[w][2]*array[w][0])
  //       ];
  //       test.push(lwh);
  //   };
  //   console.log(test);
    // console.log(test.length);
// ---------------------------------------------------------
    // let small= [];
    // console.log(array);
    //     for (let x=0; x<array.length; x++){
    //       for (let a=0; a<array[x].length; a++){
    //         console.log(array[x][a])

    // ---------------------------------------------------------
      //       let small=1000;
      //         if(test[x][a]<small){
      //           small = test[x][a];
      //             console.log(small)
      //     }
      //   }
      // }

    // console.log(small);
//
//       let sqrft = (2*lwh[0])+(2*lwh[1])+(2*lwh[2])+small
//       console.log('total sqr.ft:',sqrft);
//   };
// console.log(test.length);


// ------------to find smallest number in array + how to end------
// for (let w=0; w<array.length; w++){
//     const lwh = [
//       (array[w][0]*array[w][1]),
//       (array[w][1]*array[w][2]),
//       (array[w][2]*array[w][0]),
//     ];
//     let small = lwh[2];
//       for (let x=0; x<lwh.length; x++){
//         if(lwh[x]<small){
//           small=lwh[x]
//         }
//       }
//     console.log(small)
// };

// math();
