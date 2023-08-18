function prod(m){
    return function multiply(n){
        return m*n;
    }
}
const twice=prod(2);
let ans=twice(3);
console.log(ans);

const thrice=prod(3);
let res=thrice(3);
console.log(res);
