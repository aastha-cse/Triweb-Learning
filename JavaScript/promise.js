// function faliure(err){
//     console.log('Failed:',err);
// }

// function success(res){
//     console.log('Success:',res);
// }

// function validate(name, yes, no){
//     if(name=='Aastha') yes('Validated');
//     else no("Not matched");
// }

// validate('Aastha',success, faliure);


//using promise
function validate(name){
    return new Promise((resolve,reject)=>{
        if(name=='Aastha') resolve('Validated');
        else reject("Not matched");
    });
}
validate('Aastha').then((res)=>{
    console.log(res);
    console.log("----------------");
})
.catch((err)=>{
    console.log(err);
});


