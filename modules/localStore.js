export default class BookStorage {
    static getBookFromLS = () => {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }

    static addBookToLS = (book) => {
      const books = BookStorage.getBookFromLS();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBookFromLS = (e) => {
      const books = BookStorage.getBookFromLS();
      const children = Array.from(e.parentElement.parentElement.children);
      for (let i = 0; i < books.length; i += 1) {
        if (children[0].textContent.replaceAll('"', '') === `${books[i].title}     by     ${books[i].author}`) {
          books.splice(i, 1);
        }
      }

      localStorage.setItem('books', JSON.stringify(books));
    }
}