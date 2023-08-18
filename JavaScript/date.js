let date='2023 07 24 12:14:16';
console.log(date);

console.log("----------------");

let d=new Date(date);
console.log('month',d.getMonth());
console.log('full year',d.getFullYear());
console.log('date',d.getDate());
console.log('time',d.getTime());
console.log('day',d.getDay());
console.log('hours',d.getHours());

console.log("----------------");

d.setMonth(8);
console.log(d);