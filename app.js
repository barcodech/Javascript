document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const papal = document.getElementById("papal");

    if(myCheckBox.checked){
        console.log("You are subscribed");
    }
    else{
        console.log("You are not subscribed");

    }

    if(visa.checked){
        console.log("You are paying with Visa");
    }
    else if(mastercard.checked){
        console.log("You are paying with Mastercard");
    }
    else if(papal.checked){
        console.log("You are paying with Paypal");
    }
    else{
        console.log("You must select a payment type");
    }
}