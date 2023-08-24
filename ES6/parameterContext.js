function print([name,age]){
    console.log('name',name);
    console.log('age',age);
}
print(['Aastha',20]);

function print1({name,age}){
    console.log('name',name);
    console.log('age',age);
}
print1({name:'Agrim',age:17});

function print2({name:ename,age:eage}){
    console.log('name',ename);
    console.log('age',eage);
}
print2({name:'Rahul',age:27});