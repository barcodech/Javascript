let userName = "barcode";
let password = 1234;
 
login();
 
function login(){
    displayUserName();
    displaypassword();
 
    function displayUserName(){
        console.log(`username: ${userName}`);
    }
    function displaypassword(){
        console.log(`password: ${password}`);
    }
}