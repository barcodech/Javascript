let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");


function getArea(width,height){
    
    return width*height;
}

area = getArea(width,height);

console.log("The area is:",area);