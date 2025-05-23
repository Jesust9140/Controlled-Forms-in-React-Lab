import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // 3a. handleInputChange
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
    console.log(`Input changed: ${name} = ${value}`);
    console.log('Current newBook state:', { ...newBook, [name]: value });
  };

  // 3b. handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    console.log('Book added:', newBook);
    console.log('Books array after addition:', [...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, idx) => (
          <div className="bookCard" key={idx}>
            <strong>{book.title}</strong>
            <span>by {book.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
