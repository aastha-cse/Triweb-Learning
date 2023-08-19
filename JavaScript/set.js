let s=new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(2);
if(s.has(2)) console.log('yes');
s.delete(3);
console.log(s,s.size);

console.log("----------------");

for(const e of s)
{
    console.log('e',e);
}

console.log("----------------");

//array to set
let arr=[1,2,3,4,5,5];
console.log(arr);

let set=new Set(arr);
console.log(set);

console.log("----------------");

//set to array

let a=Array.from(set);
a.push(3);
console.log(a);

let array=[...set];
array.push(3);
console.log(array);

//weak set- collection of objects

let st=new WeakSet([{name:'aastha'},{id:18 }]);
console.log(st);

