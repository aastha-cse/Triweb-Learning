let key="new key";

function ret(){
    return 'true';
}

let obj={
    name:'Aastha',
    age:20,
    [key+2+ret()]:'yes'
}

console.log(obj);