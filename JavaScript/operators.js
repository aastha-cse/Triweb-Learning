//comma operator
let x=(1,2,3,4,5);
console.log(x);
console.log("----------------");

for(let x=0,y=1;x<2;y++,x++)
{
    console.log('x=',x);
    console.log('y=',y);
}
console.log("----------------");

//parseInt is equivalet to +
let a='4';
console.log(+a+3);
console.log("----------------");

//relational operator
function obj(){
    this.name='Aastha';
    this.id=5;
}
let o=new obj();
console.log(o);
console.log(o instanceof obj);
console.log('name' instanceof obj);
console.log("----------------");