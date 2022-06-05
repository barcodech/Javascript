var grade = "0";


switch(grade){

    case "4":
        console.log("You got >= 80 points")
        break;

    case "3":
        console.log("You got >= 70 points")
        break;
    
    case "2":
        console.log("You got >= 60 points")
        break;
    
    case "1":
        console.log("You got >= 50 points")
        break;
    
    case "0":
        console.log("You got < 50 points")
        break;

    default:
        console.log(grade,"is not defined")
}