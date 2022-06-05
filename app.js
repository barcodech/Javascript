document.getElementById("loginButton").onclick = login();



password = 4321;

function login(){
    let username = "barcode";
    let password = 1234;
    function alertInfo(){
        alert(`username : ${username} password : ${password}`);
    }
    return alertInfo;
}