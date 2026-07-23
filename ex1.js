// var a = 3;
// var b = 2;
// console.log(a+b);

// function sum (a, b){
//     return a+b;
// }

const sums = (a,b) => a+b;

const a =[1,2,3,4,5,6,7,8,9];
const b = a.filter((i) => (i%2 == 0));
console.log (b);

// filter , map , reduce

const c = b.map((i) => (i*i));
console.log(c);