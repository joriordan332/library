const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // the constructor...
}

addBookToLibrary.prototype = Object.create(Book.prototype);

document.getElementById('addBook');
addBook.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("pages_read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(newBook);
}



