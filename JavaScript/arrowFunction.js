const square= num=>num*num;
let sqr=square(5);
console.log(sqr);

//default parameter
function mul(a,b=2){
    console.log(a*b);
}
mul(2);
mul(2,3);