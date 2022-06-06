const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");
 
myButton.addEventListener("click", () => {
 
    if(myImage.style.visibility == "hidden"){
        myImage.style.visibility = "visible";
    }
    else{
        myImage.style.visibility = "hidden";
    }
})