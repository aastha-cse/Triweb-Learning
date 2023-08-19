//promise chaining
function user(){
    return new Promise((resolve,reject)=>{
        resolve({name:'Agrim'})
    });
}
user()
.then((data)=>{
    console.log("2");
    return (data.name);
})
.then((dataReturn)=>{
    console.log("3");
    console.log(dataReturn);
})
.catch((err)=>{
    console.log(err);
});
console.log("1");