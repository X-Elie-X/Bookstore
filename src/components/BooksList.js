const Bookslist = ({ books, handleDelete }) => {
  return (
    <div className="booksList">
      {books.map((book) => (
        <div className="prevBooks" key={book.id}>
          <label>
            {book.title}
            {book.author}
            {book.category}
            <button type="button" onClick={() => handleDelete(book.id)}>
              Remove button
            </button>
          </label>
        </div>
      ))}
    </div>
  );
};
export default Bookslist;
