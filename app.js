var myPhone ={
    name: "iphone",
    model: 15,
    memory: "128gb",

    call: function(){
        console.log("0.5 Baht/Min")
    },

    net: function(){
        console.log("5G")
    },

    social: function(){
        console.log("Facebook,Line,Twitter")
    },

}

console.log(myPhone.name);
console.log(myPhone.model);
console.log(myPhone.memory);
myPhone.call();
myPhone.net();
myPhone.social();