let a=2;
let b=3;
console.log("type of a= ",typeof(a));
console.log("type of b= ",typeof(b));
console.log(a+b);

let x='2.3';
let y=3;
console.log("type of x= ",typeof(x));
console.log("type of y= ",typeof(y));
console.log(x+y);
console.log(parseInt(x)+y);
console.log(+x+y);
console.log(parseFloat(x)+y);

//conversions
let z='110';
console.log(parseInt(z,2));

//literals
console.log('binary',0b0011);
console.log('octal',0o77);
console.log('decimal',117);

let obj={name:'Aastha',id:'34'};
console.log(obj);
console.log(obj.name);

let object={'':'Aastha','!':'345'};
console.log(object);
console.log(object['']);
console.log(object['!']);

let s1='Web Developer';
let name='Aastha';
let s2=`My name is ${name}. I'm a ${s1}.`;
console.log(s2);