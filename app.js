let date = new Date();
//let date = new Date(0);
//let date = new Date(2022,0,15,10,30,10);
//let date = new Date("December 15, 2022 10:30:10");
/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milli = date.getMilliseconds();
*/
/*
date.setFullYear(2025);
date.setMonth(11);
date.setDate(29);
date.setHours(22);
date.setMinutes(30);
date.setSeconds(30);
*/

 //date = date.toLocaleString();
 document.getElementById("myLabel").innerHTML = formaTime(date);


 function formatDate(date){
   let year = date.getFullYear();
   let month = date.getMonth()+1;
   let day = date.getDate();

   return `${year}/${month}/${day}`
 }


 function formaTime(date){
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let ampm = hours >= 12 ? "pm" : "am";

   hours = (hours % 12) || 12;

   return `${hours}:${minutes}:${seconds} ${ampm}`
 }


<label id="myLabel"></label>