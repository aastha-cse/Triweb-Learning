let arr=[1,2,3,4,5];
console.log(arr.join('*'));

console.log("----------------");

console.log(arr.push('e'));
console.log(arr);

console.log("----------------");

console.log(arr.pop('e'));
console.log(arr);

console.log("----------------");

console.log(arr.shift('e'));
console.log(arr);

console.log("----------------");

console.log(arr.unshift('e'));
console.log(arr);

console.log("----------------");

console.log(arr.slice(1,3));
console.log(arr);

console.log("----------------");

console.log(arr.splice(1,3));
console.log(arr);

console.log("----------------");

console.log(arr.reverse());
console.log(arr);

console.log("----------------");

let arr2=[4,7,5,2,1,6];
console.log(arr2.sort());
console.log(arr2);

console.log("----------------");

console.log(arr2.indexOf(5));
console.log(arr2);

console.log("----------------");

let arr3=['apple','mango','grapes'];
arr3.forEach((e)=>{
    console.log('I eat',e);
})

console.log("----------------");

let arr4=[1,3,4,6,7,8];
let sq=arr4.map((e)=>e*e);
console.log(sq);

console.log("----------------");

let arr5=[1,3,4,6,7,8];
let filt=arr5.filter((e)=>e%2!=0);
console.log(filt);