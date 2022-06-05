const store = new Map([
    ["apple", 5],
    ["orange", 10],
    ["coconut", 15],
    ["banana", 20],
    
  ])
  
  let total = 0;
  total += store.get("apple");
  total += store.get("orange");
  total += store.get("coconut");
  console.log(total);
  
  
  store.set("strawberry",25);
  store.delete("strawberry");
  
  console.log(store.has("strawberry"));
  console.log(store.size);
  
  store.forEach((value,key) => console.log(`${key} ${value} Baht`));