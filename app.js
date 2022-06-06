console.log(navigator.cookieEnabled);
document.cookie = "firstName=thongchai; expires=Sun, 1 January 2025 12:00:00 UTC; path=/";
console.log(document.cookie);
 
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const submit = document.querySelector("#submit");
const getcookie = document.querySelector("#getcookie");
 
submit.addEventListener("click", () => {
    setCookie("firstName", firstName.value, 365);
    setCookie("lastName", lastName.value, 365);
});
getcookie.addEventListener("click", () => {
    firstName.value = getCookie("firstName");
    lastName.value = getCookie("lastName");
});
 
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
 
function deleteCookie(name){
    setCookie(name, null, null);
}
 
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
   
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}
 
 
//setCookie("firstName", thongchai, 365);
//setCookie("lastName", jaidee, 365);
//console.log(document.cookie);
 
//getCookie("firstName");
 
//console.log(cDecoded);
//console.log(cArray);