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
addBook.addEventListener('click', addBookToLibrary) ;

function addBookToLibrary() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("pages_read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook); 

  drawTable()
}

function drawTable() { 
  

  myLibrary.forEach((library) => {
    console.log(library)
    //secondCells.removeChild(cellText);  array duplicating boks
    //tableHeaders.removeChild(headerText);
    const tbl = document.createElement("table");
    const tblHead = document.createElement("thead");
    const tblBody = document.createElement("tbody");

    
      // creates a table row
      const firstRow = document.createElement("tr");
      const secondRow = document.createElement("tr");
  
      
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const secondCells = document.createElement("td");
        const tableHeaders = document.createElement("th");
        const cellText = document.createTextNode(`${library.title} ${library.author} ${library.pages} ${library.read}`);
        const headerText = document.createTextNode(`${'title'} ${'author'} ${'pages'} ${'read'}`);
        firstRow.appendChild(tableHeaders);
        tableHeaders.appendChild(headerText);
        secondCells.appendChild(cellText);
        secondRow.appendChild(secondCells);
        
      
  
      // add the row to the end of the table body
      tblHead.appendChild(firstRow);
      tblBody.appendChild(secondRow);

    
      tbl.appendChild(tblHead);
      tbl.appendChild(tblBody);
      document.body.appendChild(tbl);
  });
  myLibrary.length = 0;
}





