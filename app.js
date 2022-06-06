let element = document.getElementById("mytitle");
element.style.backgroundColor = "lightblue";
 
 
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
 
 
let fastfoods = document.getElementsByTagName("li");
fastfoods[0].style.backgroundColor = "lightblue";
 
 
let thaifoods = document.getElementsByClassName("thaifoods");
thaifoods[0].style.backgroundColor = "lightblue";
 
 
let element = document.querySelector("[for]");
element.style.backgroundColor = "lightblue";
 
 
let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightblue";
})