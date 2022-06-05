let fullname = "oceania code";
let firstname;
let lastname;

//firstname = fullname.slice(0,7);
//lastname = fullname.slice(8);

firstname = fullname.slice(0,fullname.indexOf(" "));
lastname =fullname.slice(fullname.indexOf(" ")+1);

console.log(firstname);
console.log(lastname);