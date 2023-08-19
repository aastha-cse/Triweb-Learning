let obj={name:'Riya',clas:'12'};
//obj.name=null;
console.log(obj.name);
console.log(obj['name']);

//defining methods

let o={
    name:'Aastha',
    get n1(){
        return this.name;
    },

    set n2(newName){
        this.name=newName;
    },
    display(id){
        console.log(`${this.name} has id ${id}`);
    },

    printAge(age){
        console.log(`${this.name} has age ${age}`);
    }
    
}

o.display(10);
o.printAge(20);
console.log(o.n1);
o.n2='Agrim';
console.log(o.n1);