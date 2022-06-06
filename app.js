let element = document.querySelector("#foods");
let child = element.firstElementChild;
child.style.backgroundColor = "lightblue";
 
children.forEach(child => child.style.backgroundColor = "lightblue")
 
// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)