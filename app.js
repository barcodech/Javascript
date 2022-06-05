/*
var saying = window.prompt("Please say something");

while(saying == ""){
    saying = window.prompt("You didn't say anything");
}

console.log("You just said:",saying);
*/

var saying = window.prompt("Please say something");

do{
    saying = window.prompt("You didn't say anything");

}while(saying == "");

console.log("You just said:",saying);