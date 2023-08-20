//iterator
function itr(start=0, end=Infinity, step=1){
    let i=start;
    let count=0;

    const range={
        next:function(){
            let res;
            if(i<end){
                res = {value:i, done:false}
                i+=step;
                count++;
                return res;
            }
            return {value:count, done:true};
        }
    };
    return range;
 }
let x=itr(0,10);
 console.log(x.next());
 console.log(x.next());
 console.log(x.next());
 console.log(x.next());

 console.log("----------------");
 
 //generator
 function* itr1(start=0, end=100, step=1){
    let count=0;
    for(let i=start;i<end;i+=step){
        count++;
        yield i;
    }
    return count;
 }

 let z=itr1(0,10);
 console.log(z.next());
 console.log(z.next());
 console.log(z.next());
 console.log(z.next());