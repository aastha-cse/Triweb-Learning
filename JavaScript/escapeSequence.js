const c='\x7A';
console.log('hex char',c);

const ch='\u007A';
console.log('uni char',ch);

let ans= c==ch ? 'yes' : 'no';
console.log(ans);