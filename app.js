function talking(chat){
    console.log(chat);
};

var greeting = "Morning"

talking(greeting);
function talking(chat){
    return chat;
    
};

var greeting = "Good morning"

myVar = talking(greeting);
console.log(myVar);

function toFarenheit(c){
    return (c*9/5)+32;
}

var Farenheit = toFarenheit(37.7);
console.log(Farenheit);