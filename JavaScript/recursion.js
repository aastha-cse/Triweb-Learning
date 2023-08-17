function print(num){
    for(let i=1;i<=num;i++)
    {
        console.log(i);
    }
    for(let i=num-1;i>0;i--)
    {
        console.log(i);
    }
}
print(3); //using loop
console.log("----------------");

function printrec(num)
{
    if(num==0) return 0;
    console.log(num);
    num--;
    printrec(num);
}
printrec(3);
console.log("----------------");

const series=function p(num){
    if(num==0) return 0;
    console.log(num);
    num--;
    series(num);
}
series(2);
console.log("----------------");

const numSeries=function func(num){
    if(num==0) return 0;
    console.log(num);
    num--;
    arguments.callee(num);
}
numSeries(4);


