// && AND
// || OR 
// !  NOT

var money = 50;

if(!(money > 100)){
    console.log("You can buy KFC");
}
else if(money > 50 && money <= 100){
    console.log("You can buy Padkrapao");
}
else if(money < 50 || money == 50){
    console.log("You can buy Noodles");
}
else{
    console.log("You can buy Padthai");
}