// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)
 
const nameTag = document.createElement("h1");
nameTag.textContent = "Hello";
document.body.append(nameTag);
 
const myList = document.querySelector("#foods");
const listItem = document.createElement("li");
listItem.textContent = "pasta";
myList.append(listItem);
myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);