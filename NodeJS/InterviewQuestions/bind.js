let student2 = {
    sname: "Rakshit",
    mobile: 111111
}

let student = {
    sname: "Aastha",
    mobile: 222222,

    getName: function(){
        console.log(this.sname);
    }
}

let sn =  student.getName.bind(student);
setTimeout(sn,1000);

let st2 = student.getName.bind(student2);
setTimeout(st2,1000);