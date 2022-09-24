import PropTypes from 'prop-types';

const Bookslist = ({ books, handleDelete }) => (
  <div className="booksList">
    {books.map((book) => (
      <div className="prevBooks" key={book.id}>
        {book.title}
        {book.author}
        {book.category}
        <button type="button" onClick={() => handleDelete(book.id)}>
          Remove button
        </button>
      </div>
    ))}
  </div>
);

Bookslist.defaultProps = {
  books: '',
};

Bookslist.propTypes = {
  books: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
};
export default Bookslist;
