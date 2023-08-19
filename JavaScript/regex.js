let s='Hello everyone. I am aastha';
let regx=/\ever/;
console.log(s.match(regx));

console.log("----------------");

let str='Hello everyone. I am aastha';
let reg1 =new RegExp('everi');
let res1=reg1.test('test',str);
console.log(res1);

let reg2 =new RegExp('ever');
let res2=str.search(reg2);
console.log(res2);
console.log(str[res2]);

console.log("----------------");

var r=/a(b+)a/g;
var arr=r.exec('aaabbbbabsbsaba');
console.log(arr);

console.log("----------------");

const st="i am happy.";
const re=/am/i;
console.log(st.replace(re,'was'));