let fruits =     ["apples","oranges","banana"];
let vegetables = ["pappers","tomatoes","potaotes"];
let meats =      ["eggs","chicken","fish"];

let allList = [fruits,vegetables,meats];


allList[2][0] = "beef";

for(let list of allList){
  for(let i of list){
    console.log(i);
  }
}