import { useState } from 'react';
import Bookslist from './BooksList';
import Diplaybooks from './Displaybooks';
const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'books', author: 'books1', category: 'action' },
    { id: 2, title: 'books2', author: 'books2', category: 'action1' },
    { id: 3, title: 'books3', author: 'books3', category: 'action2' },
  ]);
  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };
  return (
    <>
      <Bookslist books={books} handleDelete={handleDelete} />
      <Diplaybooks />
    </>
  );
};
export default Books;
