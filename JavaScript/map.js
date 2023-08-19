let mp=new Map();
mp.set('name','Aastha');
mp.set('id',18);
mp.set('college','GEU');
console.log(mp,mp.size,mp.get('name'));

console.log("----------------");

//weak map object

let m=new WeakMap();
obj1={}
obj2={1:1}
obj3={2:2}
m.set(obj1,'val1');
m.set(obj2,'val2');
m.set(obj3,'val3');
let v1=m.get(obj1);
console.log(v1);