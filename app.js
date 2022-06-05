sum(5,10, displayConsole);

function sum(x,y,callback){
    let result = x+y; 
    callback(result);
}
function displayConsole(output){
    console.log(output);
}
function displaypageHTML (output){

 document.getElementById("myLabel").innerHTML = output;
}