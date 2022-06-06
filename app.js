class Book{
  constructor(name, price){
      this.name = name;
      this.price = price;
  }
}
 
let book1 = new Book("Math", 100);
let book2 = new Book("Science", 200);
let book3 = new Book("Art", 300);
 
let books = [book1,book2,book3];
 
let books = [new Book("Math", 100),
           new Book("Science", 200),
           new Book("Art", 300),];
 
console.log(book1.name + book1.price);          
console.log(books[0].name + books[0].price);
books.forEach(book => console.log(`${book.name} ${book.price}`));