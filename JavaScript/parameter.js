function add(a,b){
    console.log(a+b);
}
add(2,3);
console.log("----------------");

//rest parameter

function addNum(){
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    console.log(sum);
}
addNum(2,3);
addNum(2,3,4);
console.log("----------------");

function addNums(){
    let sum=0;
    //convert arguments to array
    let arr=Array.from(arguments);
    arr.forEach(e=>{
        sum+=e;
    });
    console.log(sum);
}
addNums(1,3,4);
console.log("----------------");

function mul(m,...args)
{
    args.forEach(e=>{
        console.log(m*e);
    })
}
mul(2,3,4);