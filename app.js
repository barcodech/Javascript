//DOM = Document Object model (API)
 
console.log(document);
console.dir(document);
console.log(document.title);
console.log(document.URL);
 
document.title = "My new title";
document.location = "http://www.google.com";
 
document.body.style.backgroundColor = "black";
document.getElementById("header").innerHTML = "Hello";