// for(let i=1;i<=10;i++)
// {
//     console.log(i+' Aastha');
// }

// let n=1;
// while(n<=10)
// {
//     console.log(n+' Gupta');
//     n++;
// }


// let i=1;
// do{
//     console.log(i+' Aastha');
//     i++;
// }while(i<=10);

// for(let i=1;i<=3;i++)
// {
//     for(let j=1;j<=4;j++)
//     {
//         if(j==2) continue;
//         console.log(i,j);
       
//     }
//     if(i==2) break;
// }

// row:
// for(let i=1;i<=5;i++)
// {
//     for(let j=1;j<=3;j++)
//     {
//         if(j==3) break row;
//         console.log(i,j);
//     }
// }

//for in loop
obj={
    name:'Aastha',
    id:18
}
for(const key in obj){
    console.log(`${key} of obj is: ${obj[key]}`);
}

//for of loop and forEach loop
const arr=[1,2,3,4,5];
for(let element of arr)
{
    console.log(element);
}

arr.forEach((e)=>{
    console.log(e);
});
