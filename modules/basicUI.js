import BookStorage from './localStore.js';
/* import { DateTime } from './luxon';
 */ 
export default class BasicUI {
    static showDate = () => {
      document.getElementById('display-date').innerHTML = Date();
    }

    static displayBooks = () => {
      const StoredBooks = BookStorage.getBookFromLS();

      const books = StoredBooks;
      books.forEach((book) => BasicUI.addBooksToDom(book));
    }

    static addBooksToDom = (book) => {
      const tableBody = document.getElementById('table-body');
      tableBody.insertAdjacentHTML(
        'beforeend',
        `
              <tr>
              <td class = "grid-left">"${book.title}"     by     ${book.author}</td>
              <td class = "grid-right"><button class = "remove" type = 'submit'>Remove</button></td>
              </tr>
              `,
      );
    }

    static clearFields = () => {
      document.querySelector('.title').value = '';
      document.querySelector('.author').value = '';
    }

    static removeBooksFromDom = (e) => {
      if (e.className === 'remove') {
        e.parentElement.parentElement.remove();
      }
    }
}