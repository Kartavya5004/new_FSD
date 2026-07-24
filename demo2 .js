const a = [1,2,3];
const b = [4,5];

console.log("a=" , a);
console.log("b=" , b);
const c = [...a,...b];  // ...  spread operator
console.log("c=", c);