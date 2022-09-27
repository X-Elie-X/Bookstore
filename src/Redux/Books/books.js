export const ADD_BOOK = 'Books/books/ADD_BOOK';
export const REMOVE_BOOK = 'Books/books/REMOVE_BOOK  ';

export const initialState = [
  {
    id: 1,
    title: 'hello world',
    author: 'Hello',
  },
  {
    id: 2,
    title: 'hello Books',
    author: 'book',
  },
];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.books];

    case REMOVE_BOOK:
      return state.filter((books) => action.booksId !== books);

    default:
      return state;
  }
};

export const AddBook = (books) => ({
  type: 'ADD_BOOK',
  books,
});

export const RemoveBook = (booksId) => ({
  type: 'REMOVE_BOOK',
  booksId,
});

export default Reducer;
