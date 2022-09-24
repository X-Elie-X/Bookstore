import PropTypes from 'prop-types';

function Book(props) {
  const { books } = props;
  return (
    <div className="booksList">
      {books.map((Book) => (
        <div className="prevBooks" key={Book.id}>
          {Book.title}
          {Book.author}
          {Book.category}
          <button type="button">Remove button</button>
        </div>
      ))}
    </div>
  );
}

Book.defaultProps = {
  books: [],
};

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};
export default Book;
