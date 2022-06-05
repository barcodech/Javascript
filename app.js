var symbol = window.prompt("Enter a symbol");
var rows = window.prompt("Enter number of rows");
var columns = window.prompt("Enter number of columns");

for(let i=0;i<rows;i++){

    for(let j=0;j<columns;j++){
        document.getElementById("sharp").innerHTML += symbol;
    }
    document.getElementById("sharp").innerHTML += ("<br>");
}