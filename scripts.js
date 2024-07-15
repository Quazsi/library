const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

// Create some books
const book1 = new Book("1984", "George Orwell", '100', false);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", '281', true);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", '180', false);
const book4 = new Book("Moby Dick", "Herman Melville", '585', false);
const book5 = new Book("Pride and Prejudice", "Jane Austen", '279', true);

function showBooks() {

    // Get the card wrapper div
    const cardWrapper = document.getElementById('cardWrapper');

    // Clear the existing content
    cardWrapper.innerHTML = '';

    for (let index = 0; index < myLibrary.length; index++) {

  
        
        const book = myLibrary[index];
        const card = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');
        const btnDiv = document.createElement('div');
        const readBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        
        title.textContent = myLibrary[index].title;
        author.textContent = "Author: " + myLibrary[index].author;
        pages.textContent = "Pages: " + myLibrary[index].pages;

        title.className = 'title';
        author.className = 'author';
        pages.className = 'pages';
        read.className = 'read';
        card.className = 'card';
        btnDiv.className = 'btnDiv';
        readBtn.className = 'readBtn';
        deleteBtn.className = 'deleteBtn';

        if(book.read == false) {
            readBtn.textContent = "Not Read";
        } else {
            readBtn.textContent = "Read";
        }

        deleteBtn.textContent = "Delete";

         // Add event listener to delete button
        deleteBtn.addEventListener('click', () => {
        // Remove the book from the library
        myLibrary.splice(index, 1);
        // Update the display
        showBooks();
      });

        readBtn.addEventListener('click', () => {
            if(book.read) {
                book.read = false;
                readBtn.textContent = "Not Read"
                readBtn.style.borderColor = "red";
                readBtn.style.backgroundColor = 'red';

            } else {
                book.read = true;
                readBtn.textContent = "Read";
                readBtn.style.backgroundColor = 'white';
                readBtn.style.borderColor = 'green';
            }
        });

        if(book.read) {
            readBtn.style.backgroundColor = 'white';
            readBtn.style.borderColor = 'green';



        } else {
            readBtn.style.borderColor = "red";
            readBtn.style.backgroundColor = 'red';
        }
    


        cardWrapper.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(btnDiv);
        btnDiv.appendChild(readBtn);
        btnDiv.appendChild(deleteBtn);
        
    }
}

document.addEventListener("DOMContentLoaded", function() {
    myLibrary.push(book1, book2, book3, book4, book5);
    showBooks();

    




const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
    dialog.showModal();
  });
  
  jsCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(bookForm); 
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read') === 'on';

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    showBooks();
    dialog.close();
  });
});