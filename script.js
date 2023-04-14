const myLibrary = [{
  title: "A Game of Thrones",
  author: "George R. R. Martin",
  pages: 694,
  read: "Yes",
}];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = `${title}_${Date.now()}`
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
        const secondCellsone = document.createElement("td");
        const secondCellstwo = document.createElement("td");
        const secondCellsthree = document.createElement("td");
        const secondCellsfour = document.createElement("td");
        const secondCellsfive = document.createElement("td");


        const tableHeaders = document.createElement("th");
        const tableHeadersone = document.createElement("th");
        const tableHeaderstwo = document.createElement("th");
        const tableHeadersthree = document.createElement("th");




        const cellText = document.createTextNode(library.title);
        const authorText = document.createTextNode(library.author);
        const pagesText = document.createTextNode(library.pages);
        const textread = document.createTextNode(library.read);






        const headerText = document.createTextNode('Title');
        const headerTextone = document.createTextNode('Author');
        const headerTexttwo = document.createTextNode('Pages');
        const headerTextthree = document.createTextNode('Read');

        
        firstRow.appendChild(tableHeaders);
        firstRow.appendChild(tableHeadersone);
        firstRow.appendChild(tableHeaderstwo);
        firstRow.appendChild(tableHeadersthree);






        tableHeaders.appendChild(headerText);
        tableHeadersone.appendChild(headerTextone);
        tableHeaderstwo.appendChild(headerTexttwo);
        tableHeadersthree.appendChild(headerTextthree);




        secondCells.appendChild(cellText);
        secondCellsone.appendChild(authorText);
        secondCellstwo.appendChild(pagesText);
        secondCellsthree.appendChild(textread);


        secondRow.appendChild(secondCells);
        secondRow.appendChild(secondCellsone);
        secondRow.appendChild(secondCellstwo);
        secondRow.appendChild(secondCellsthree);
        secondRow.appendChild(secondCellsfour);
        secondRow.appendChild(secondCellsfive);
        

        const readButton = document.createElement("button")
        const readText = document.createTextNode("Change read status");
        const deleteButton = document.createElement("button")
        const deleteText = document.createTextNode("Delete");
        secondCellsfour.appendChild(readButton);
        readButton.appendChild(readText);
        secondCellsfive.appendChild(deleteButton);
        deleteButton.appendChild(deleteText);
        

        let idData = document.createElement("td")
        idData.textContent = `${Date.now()}`

  
      // add the row to the end of the table body
      tblHead.appendChild(firstRow);
      tblBody.appendChild(secondRow);

    
      tbl.appendChild(tblHead);
      tbl.appendChild(tblBody);
      document.body.appendChild(tbl);
                                      
      deleteButton.addEventListener("click", (book)=> {
        if(book.id === Object.id){
          tbl.remove()
        }
        });

        readButton.addEventListener("click", () => {
          if (textread.textContent == 'Yes') {
            textread.textContent = 'No'
          }
          else if (textread.textContent == 'No') {
            textread.textContent = 'Yes'
          }
        });
        
  });
  myLibrary.length = 0;
}





function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

drawTable()