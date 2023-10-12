function add(callby,n1,n2){
    console.log(callby,":",n1+n2);
}

setImmediate(()=>{
    add("SetImmediate",5,3);
})

setTimeout(() => {
    add("SetTimeout",3,6);
}, 0);

process.nextTick(()=>{
    add("Process NextTick",4,5);
});

add("Direct",1,2);