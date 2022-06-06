import {PI, getCircleline, getArea} from "./math_module.js";

console.log(PI);
 
let circumference = getCircleline(10);
console.log(circumference);
 
let area = getArea(10);
console.log(area);
 
 
export const PI = 3.14159;
 
export function getCircleline (radius) {
    return  2 * PI * radius
}
export function getArea (radius) {
    return  PI * radius * radius;
}