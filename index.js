import BookStore from './modules/createBooks.js';
import BasicUI from './modules/basicUI.js';
import BookStorage from './localStore.js';

document.addEventListener('DOMContentLoaded', BasicUI.showDate);
// Event: Display Books.
document.addEventListener('DOMContentLoaded', BasicUI.displayBooks);

// Even to add the book.
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the value from the form fields.
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  // validate the fields
  if (title === '' || author === '') {
    document.querySelector('.error').classList.add('active');
    // remove after three seconds
    setTimeout(() => document.querySelector('.error').classList.remove('active'), 3000);
  } else {
    // Create an instance of the book class
    const book = new BookStore(title, author);
    // Now we will add book to the DOM.
    BasicUI.addBooksToDom(book);
    BasicUI.clearFields();
    // Add to localStorage
    BookStorage.addBookToLS(book);
    document.querySelector('.success').classList.add('active');
    // remove after three seconds
    setTimeout(() => document.querySelector('.success').classList.remove('active'), 3000);
  }
});

// RemoveElement
document.querySelector('#table-body').addEventListener('click', (e) => {
  BasicUI.removeBooksFromDom(e.target);
  BookStorage.removeBookFromLS(e.target);
});
const contactWrapper = document.querySelector('.contact-wrapper');
const bookWrapper = document.querySelector('.book-wrapper');
const formInput = document.querySelector('.form-input');
document.querySelector('.list').addEventListener('click', () => {
  bookWrapper.classList.remove('active');
  contactWrapper.classList.remove('active');
  formInput.classList.remove('active');
});
document.querySelector('.add-new').addEventListener('click', () => {
  bookWrapper.classList.add('active');
  contactWrapper.classList.remove('active');
  formInput.classList.add('active');
});
document.querySelector('.contact').addEventListener('click', () => {
  bookWrapper.classList.add('active');
  contactWrapper.classList.add('active');
  formInput.classList.remove('active');
});
// add mobile menu code manipulation
const mobileMenu = document.querySelector('.mobile-menu');
document.querySelector('.hamburger').addEventListener('click', () => {
  mobileMenu.classList.add('active');
});
document.querySelector('.close').addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// add mobile single page functionality.

document.querySelector('.m-list').addEventListener('click', () => {
  bookWrapper.classList.remove('active');
  contactWrapper.classList.remove('active');
  formInput.classList.remove('active');
  mobileMenu.classList.remove('active');
});
document.querySelector('.m-add-new').addEventListener('click', () => {
  bookWrapper.classList.add('active');
  contactWrapper.classList.remove('active');
  formInput.classList.add('active');
  mobileMenu.classList.remove('active');
});
document.querySelector('.m-contact').addEventListener('click', () => {
  bookWrapper.classList.add('active');
  contactWrapper.classList.add('active');
  formInput.classList.remove('active');
  mobileMenu.classList.remove('active');
});
