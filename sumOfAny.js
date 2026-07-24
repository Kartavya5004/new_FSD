// function sum(...a){
//     const add = a.reduce((i,s) => (s+i));
//     return add;
// }

function sum(...a){
    let s = 0;
    for(i of a){
        s += i;
    }
    return s;
}

console.log(sum(2,3,4,5,6));