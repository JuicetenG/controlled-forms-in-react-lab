import { useState } from 'react';

const BookShelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const newBookObject = { ...newBook, [event.target.name]: event.target.value};
    setNewBook(newBookObject);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBooksArray = [...books, newBook];
    setBooks(newBooksArray);
    setNewBook({ title: '', author: '' });
  }

  return (
    <div className="bookshelfDiv">
      <h2>My Bookshelf</h2>
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange} 
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange} 
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <ul>
          {books.map((book, index) => (
            <li key={index} className="bookCard">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookShelf;