let date;

//date = new Date(0);
//date = new Date();
date = new Date(2022,5,10,10,30,20);
//date = new Date("May 15,2022 10:30:20");

let year = date.getFullYear();
let month = date.getMonth();
let dayOfweek = date.getDay();
let dayOfmonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliseconds = date.getMilliseconds();


console.log(year);
console.log(month);
console.log(dayOfweek);
console.log(dayOfmonth);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);

date.setFullYear(2022);
date.setMonth(10);
date.setDate(1);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(30);
date.setMilliseconds(15);

console.log(date);