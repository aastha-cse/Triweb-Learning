function add(a)
{
    a=a+1;
    console.log('new a =', a);
}
let a=4;
add(a); //pass by value
console.log('old a =', a);
console.log("----------------");

function update(arr)
{
    for(let i=0;i<arr.length;i++) 
        arr[i]=arr[i]+1;
    console.log('updated array= ', arr);
}

let arr=[1,2,3,4,5];
update(arr); //pass by reference
console.log(`old array= `,arr);
console.log("----------------");

//anonymous function
const square=function(n){
    console.log(n*n);
}
square(4);
console.log("----------------");

